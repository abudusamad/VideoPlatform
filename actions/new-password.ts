"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { NewPasswordSchema } from "@/schemas";
import { getResetPasswordTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";


export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: string | null) => {
    if (!token) {
        return { error: "Missing token!" };
    }

    const validatedFields = NewPasswordSchema.safeParse(values);
    if (!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    const { password } = validatedFields.data;

    const exiitingToken = await getResetPasswordTokenByToken(token);
    if (!exiitingToken) {
        return {error: "Token does not exist!"}
    }

    const hasExpired = new Date(exiitingToken.expires) < new Date();
    if (hasExpired) {
        return {error: "Token has expired!"}
    }

    const exitingUser = await getUserByEmail(exiitingToken.email);
    if (!exitingUser) {
        return {error: "Email does not exist!"}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: { id: exitingUser.id },
        data: {
            password: hashedPassword
        }
    });

    await db.passwordResetToken.delete({
        where: { id: exiitingToken.id }
    });
    return {
        success: "Password updated!"
    }
}