"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PostSignupToast() {
  useEffect(() => {
    const message = sessionStorage.getItem("postSignupSuccessToast");
    if (message) {
      sessionStorage.removeItem("postSignupSuccessToast");
      // Small delay so the page and ToastContainer are fully mounted
      setTimeout(() => toast.success(message), 300);
    }
  }, []);

  return null;
}
