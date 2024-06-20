"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Header } from "./header";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    showSocial,
    backButtonHref
}:CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Facebook</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Google</button>
                    </div>
                </CardFooter>
            )}
            <CardFooter>
                <p className="text-center text-gray-500 text-sm">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
            </CardFooter>

        </Card>
    )
}