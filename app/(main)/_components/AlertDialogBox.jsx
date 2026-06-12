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

const AlertDialogBox = ({
  children,
  selectedIds = [],
  onConfirm,
  Icon,
  title,
  desc,
  cancelText,
  actionText,
}) => {
  const count = selectedIds.length;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild disabled={!count}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className={"bg-[#1e1e24]"}>
        <AlertDialogHeader>
          {Icon && (
            <AlertDialogMedia className="bg-[#FB5756]">
              <Icon className="text-white" />
            </AlertDialogMedia>
          )}
          <AlertDialogTitle className={"text-white"}>
            {title ? title : ""}
          </AlertDialogTitle>
          <AlertDialogDescription>{desc ? desc : ""}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            variant="outline"
            className={
              "cursor-pointer bg-transparent hover:bg-[#24252c] transition"
            }
          >
            {cancelText || "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => onConfirm(selectedIds)}
            className={
              "bg-[#FB5756] hover:bg-[#ff6f6f] text-white cursor-pointer transition"
            }
          >
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogBox;
