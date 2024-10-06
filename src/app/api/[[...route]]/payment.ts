import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { verifyAuth } from "@hono/auth-js";
import { z } from "zod";

const app = new Hono()
    .post("/create-order",
        verifyAuth(),
        zValidator("json", z.object({
            planId:z.string()
        })),
        async (c) => {
            const session = c.get("authUser");
            if (!session.token?.email) {
                return c.json({ error: "unauthorized" }, 401);
            }
            //create order
            let options = {
                amount: 999,
                currency: "INR",
                receipt:"order_rcptid_11"
            }

           
        }
    )

export default app;

