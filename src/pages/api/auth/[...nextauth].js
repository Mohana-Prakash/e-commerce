import {
  signInCallback,
  signOutCallback,
} from "@/components/auth/authCallback";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     console.log("eeeeeeeeeeee");
  //     if (account.provider === "google") {
  //       return profile.email_verified && profile.email.endsWith("@example.com");
  //     }
  //     return true;
  //   },
  // },
});
