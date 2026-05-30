import { db } from "@/lib/db";
import { users } from "@/db/schema/index";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("CLERK_WEBHOOK_SECRET is missing from .env.local");
  }

  // Get headers from Clerk/Svix
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  // Verify webhook signature
  // const payload = await req.json();
  // const body = JSON.stringify(payload);
  const body = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET);

  let event;

  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (error) {
    console.log("Webhook verification failed: ", error);
    return new Response("Invalid webhook signature", { status: 400 });
  }

  const eventType = event.type;

  // User created -> inserted to DB
  if (eventType === "user.created") {
    const {
      id,
      email_addresses,
      primary_email_address_id,
      first_name,
      last_name,
      image_url,
    } = event.data;

    const primaryEmail = email_addresses.find(
      (email) => email.id === primary_email_address_id,
    );

    const email = primaryEmail?.email_address;

    if (!email) {
      console.log("No email found for user: ", id);

      return new Response("Email required", { status: 400 });
    }

    await db.insert(users).values({
      id,
      email,
      firstName: first_name,
      lastName: last_name,
      imageUrl: image_url,
    });

    console.log("New user created in DB", id);
  }

  // User updated -> update in DB
  if (eventType === "user.updated") {
    const {
      id,
      email_addresses,
      primary_email_address_id,
      first_name,
      last_name,
      image_url,
    } = event.data;

    const primaryEmail = email_addresses.find(
      (email) => email.id === primary_email_address_id,
    );

    const updateData = {
      firstName: first_name,
      lastName: last_name,
      imageUrl: image_url,
    };

    if (primaryEmail?.email_address) {
      updateData.email = primaryEmail.email_address;
    }

    await db.update(users).set(updateData).where(eq(users.id, id));

    console.log("User updated in DB", id);
  }

  // User deleted -> delete in DB
  if (eventType === "user.deleted") {
    const { id } = event.data;

    await db.delete(users).where(eq(users.id, id));

    console.log("User deleted in DB", id);
  }

  return new Response("Webhook received", { status: 200 });
}
