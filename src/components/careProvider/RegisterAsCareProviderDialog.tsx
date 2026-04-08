"use client";

import React, { useEffect, useState } from "react";
import RegisterAsCareProvider from "@/components/careProvider/RegisterAsCareProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const RegisterAsCareProviderDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);

    const openDialog = () => setOpen(true);
    window.addEventListener("open-register-care-provider-dialog", openDialog);

    return () => {
      window.removeEventListener("open-register-care-provider-dialog", openDialog);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="!top-[156px] !translate-y-0 w-[95vw] sm:w-[75vw] max-w-[1000px] max-h-[calc(100vh-108px)] overflow-y-auto border-none bg-transparent p-0 shadow-none"
      >
        <DialogTitle className="sr-only">Register as a caregiver</DialogTitle>
        <DialogDescription className="sr-only">
          Fill out the caregiver registration form.
        </DialogDescription>

        <div className="overflow-hidden rounded-3xl bg-white">
          <RegisterAsCareProvider />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterAsCareProviderDialog;
