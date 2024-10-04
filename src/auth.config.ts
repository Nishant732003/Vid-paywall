import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import { db } from "./db/db";

export default {
    adapter:DrizzleAdapter(db),
    providers: [Github],
    session: {
        strategy: "jwt", 
    }
} satisfies NextAuthConfig;
