import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"


import { db } from "@/lib/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt"
  },
  providers: [],
})