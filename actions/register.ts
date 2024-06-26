"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFileds = RegisterSchema.safeParse(values)

    if (!validatedFileds.success) {
        return {error: "Invalid fields!"}
    }

    const { name, email, password } = validatedFileds.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return {error: "Email already in use !"}
    }

    await db.user.create({
        data: {
            name, 
            email,
            password: hashedPassword,
        }
    })

    const verificationToken = await generateVerificationToken(email);
    console.log(verificationToken)
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

   

    return {success: "Confirmation email sent!"}
   
    
}