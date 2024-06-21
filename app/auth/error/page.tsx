
import { ErrorCard } from "@/components/auth/erro-card";
import { Suspense } from "react";

const AuthErrorPage = () => {
    return (
        <Suspense >
            <ErrorCard/>
        </Suspense>
   )
};

export default AuthErrorPage;
