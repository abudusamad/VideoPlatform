"use server";

import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";


import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);
	
	console.log("Login:", values);

    if(!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    const { email, password} = validatedFields.data;
    const exitingUser = await getUserByEmail(email);

    if (!exitingUser || !exitingUser.email || !exitingUser.password ) {
        return {error: "Email does not exit!"}
    }
    
	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		
		});
		return { success: "Logged in successfully!" };
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials" };
				default:
					return {error: "Something went wrong!"}
			}
		}
		throw error;
	}
    
}