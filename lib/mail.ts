
import { useMemo } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const useOrigin = () => {
	const origin = useMemo(() => {
		return typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";
	}, []);
	return origin;
};


export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${origin}/auth/confirm?token=${token}`;

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${origin}/auth/new-password?token=${token}`

  await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
  });
};