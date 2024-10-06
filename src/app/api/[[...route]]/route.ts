import { Context, Hono } from 'hono'
import { handle } from 'hono/vercel'
import { AuthConfig, initAuthConfig } from "@hono/auth-js";
import authConfig from '@/auth.config';
export const runtime = 'nodejs'

//routes

import userRoutes from "@/app/api/[[...route]]/user"



function getAuthConfig(c: Context): AuthConfig{
    
    const config = {
        secret: c.env.AUTH_SECRET,
        ...authConfig,
    };
   
    return config;
}

const app = new Hono().basePath('/api');

app.use("*", initAuthConfig(getAuthConfig));
const routes = app.route("/user", userRoutes);


export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes;

//RPC -Rempte Procedure call
