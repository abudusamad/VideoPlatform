"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFileds = RegisterSchema.safeParse(values)

    if (!validatedFileds.success) {
        return {error: "Invalid fields!"}
    }

    const { name, email, password } = validatedFileds.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    
}