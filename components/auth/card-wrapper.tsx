"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Header } from "./header";
import { Social } from "./social";


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
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                   <Social/>
                </CardFooter>
            )}
            <CardFooter>
              
                <BackButon/>
            </CardFooter>

        </Card>
    )
}