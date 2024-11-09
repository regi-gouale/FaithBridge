import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusIcon } from "lucide-react";
import { useMedia } from "react-use";
import { CreateInterviewReportForm } from "./create-interview-report-form";

export const NewInterviewButton = () => {
  const isDesktop = useMedia("(min-width: 1024px)", true);
  console.log(isDesktop);
  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex rounded-full font-heading font-semibold">
            <PlusIcon className="size-8" />
            <span className="hidden md:flex">New Interview Report</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create Interview Report</DialogTitle>
            <DialogDescription>
              Fill out the form below to create a new interview report.
            </DialogDescription>
          </DialogHeader>
          <CreateInterviewReportForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex rounded-full font-heading font-semibold">
          <PlusIcon className="size-8" />
          <span className="hidden md:flex">New Interview Report</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle className="text-center font-heading">
              Create Interview Report
            </DrawerTitle>
            <DrawerDescription className="text-center font-body text-sm">
              Fill out the form below to create a new interview report.
            </DrawerDescription>
          </DrawerHeader>
          <CreateInterviewReportForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
