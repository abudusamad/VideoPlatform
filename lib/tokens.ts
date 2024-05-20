import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { getResetPasswordTokenByEmail } from "@/data/password-reset-token";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 1000 * 60 * 60);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }
  const verificationToken = await db.verificationToken.create({
    data: {
      token,
      expires,
      email,
    },
  });
  return verificationToken;
};


  export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 1000 * 60 * 60);

    const existingToken = await getResetPasswordTokenByEmail(email);
    if (existingToken) {
      await db.passwordResetToken.delete({
        where: { id: existingToken.id },
      });
    }
    
    const passwordResetToken = await db.passwordResetToken.create({
      data: {
        token,
        expires,
        email,
      },
    });
    return passwordResetToken;
  }