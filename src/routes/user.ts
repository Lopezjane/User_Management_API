import { Router } from "express";
import { userService } from "../_helpers/service";

export const userRouter = Router();



// POST /api/users
userRouter.post("/", async (req, res, next) => {
  userService
    .create(req.body)
    .then(() => res.json({ message: "User created" }))
    .catch(next);
});

