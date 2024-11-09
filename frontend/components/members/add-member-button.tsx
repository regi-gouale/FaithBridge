"use client";

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
import { CreateMemberForm } from "./create-member-form";

export const AddMemberButton = () => {
  const isDesktop = useMedia("(min-width: 768px)", true);
  return isDesktop ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex rounded-full font-heading font-semibold">
          <PlusIcon className="size-8" />
          <span className="flex">Ajouter</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-center font-heading font-semibold">
            Ajouter un membre
          </DialogTitle>
          <DialogDescription className="text-center text-xs">
            Ajouter un membre à la liste des membres.
          </DialogDescription>
        </DialogHeader>
        <CreateMemberForm />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="flex rounded-full font-heading font-semibold"
          size={"icon"}
        >
          <PlusIcon className="size-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle className="text-center font-heading font-semibold">
              Ajouter un membre
            </DrawerTitle>
            <DrawerDescription className="text-center text-xs">
              Ajouter un membre à la liste des membres.
            </DrawerDescription>
          </DrawerHeader>
          <CreateMemberForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
