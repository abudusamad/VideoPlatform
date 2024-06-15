import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"


import { db } from "@/lib/db"
import authConfig from "@/auth.config"
 
export const { handlers: { GET, POST }
  , signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt"
  },
  ...authConfig,
})