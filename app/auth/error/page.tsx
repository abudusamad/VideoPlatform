
import { ErrorCard } from "@/components/auth/erro-card";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Error",
    description: " Error in the page",
};

const AuthErrorPage = () => {
    return (
        <Suspense >
            <ErrorCard/>
        </Suspense>
   )
};

export default AuthErrorPage;
