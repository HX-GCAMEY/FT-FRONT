import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
});

export {handler as GET, handler as POST};
