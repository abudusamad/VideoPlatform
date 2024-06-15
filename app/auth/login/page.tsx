import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";

const AuthLogin = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default AuthLogin;
