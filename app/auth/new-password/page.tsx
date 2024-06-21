import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Password",
    description: "Enter your new password",
};


const NewPasswordPage = () => {

    return (
        <Suspense>
            <NewPasswordForm />
    </Suspense>
)
};

export default NewPasswordPage;
