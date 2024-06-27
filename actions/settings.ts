"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
;
import getCurrentUser from "./get-current-user";
import { unstable_update } from "@/auth";
import { currentUser } from "@/lib/auth";

export const settings = async (
  values: z.infer<typeof SettingsSchema>
) => {
   const user = await currentUser();
    if (!user) {
        return { error: "Unauthorized" }
    }
    const newUser = await getCurrentUser();
    if (!newUser) {
        return { error: "Unauthorized" }
    }

    const dbUser = await getUserById(newUser.id);

  if (!dbUser) {
    return { error: "Unauthorized" }
  }

  
  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    }
  });

  unstable_update({
    user: {
      role: updatedUser.role,
    }
  });

  return { success: "Settings Updated!" }
}