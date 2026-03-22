import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import user from "@/app/models/user";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: {},
      password: {}
    },
    async authorize(credentials, req) {
        await mongoose.connect(process.env.MONGO_URI)
        const Model=user
        const client=await Model.findOne({email:credentials.username})
        if(!client) {
            return null;
        }
        if(client.password===credentials.password) {
            return client;
        }else{
            return null;
        }
    }
  })
  ],
  pages: {
    signIn: "/signin",
    error: "/api/auth/error",
  },
})

export { handler as GET, handler as POST };