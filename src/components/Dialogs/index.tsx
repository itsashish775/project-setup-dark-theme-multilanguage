

import * as React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface DialogSkeletonProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const DialogSkeleton: React.FC<DialogSkeletonProps> = ({
  open,
  onOpenChange,
  children,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="w-full rounded-xl" showCloseButton={false}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogSkeleton;
