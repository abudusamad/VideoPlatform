
import { ConfirmForm } from "@/components/auth/confirm-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm",
  description: "Confirm your account",
};

const ConfirmPage = () => {
  return (
    <Suspense>
      <ConfirmForm/>
    </Suspense>
  );
};

export default ConfirmPage;
