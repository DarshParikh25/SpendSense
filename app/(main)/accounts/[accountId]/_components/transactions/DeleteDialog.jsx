import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Trash2Icon } from "lucide-react";

const DeleteDialog = ({ children, selectedIds, onConfirm }) => {
  const count = selectedIds.length;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild disabled={!count}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className={"bg-[#1e1e24]"}>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-[#FB5756]">
            <Trash2Icon className="text-white" />
          </AlertDialogMedia>
          <AlertDialogTitle className={"text-white"}>
            Delete {count > 1 && count} transaction
            {count > 1 && "s"}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete {count > 1 ? "these" : "this"}{" "}
            transaction
            {count > 1 && "s"}. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            variant="outline"
            className={
              "cursor-pointer bg-transparent hover:bg-[#24252c] transition"
            }
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => onConfirm(selectedIds)}
            className={
              "bg-[#FB5756] hover:bg-[#ff6f6f] text-white cursor-pointer transition"
            }
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
