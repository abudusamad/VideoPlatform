
import { ResetForm } from "@/components/auth/reset-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset",
  description: "Reset your password",
};

const AuthRest = () => {
  return (
    <Suspense>
      <ResetForm />
    </Suspense>
  );
};

export default AuthRest;
