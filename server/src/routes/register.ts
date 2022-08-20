import { Request, Response } from "express";
import db from "../db";
import router from "./router";
import crypto from "crypto";

router.post("/", async (req: Request, res: Response) => {
	const passwordSalt = crypto.randomBytes(32).toString("base64");
	// const passwordHash = await hashPassword(req.body.password, passwordSalt);
	// try {
	//     const user = await db.user.create({
	//         data: {
	//             name: req.body.name,
	//             email: req.body.email,
	//             subscription: req.body.subscription,
	//             passwordHash,
	//             passwordSalt,
	//         },
	//     });
	//     return res.json(toUserJson(user));
	// } catch (error: any) {
	//     if (error.meta.target[0] === "email") {
	//         throw Error("Email already in use");
	//     }
	// }
});
