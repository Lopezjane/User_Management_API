import { Router } from "express";
import { userService } from "../_helpers/service";

export const userRouter = Router();

// PUT /api/users/:id
userRouter.put("/:id", async (req, res, next) => {
  userService
    .update(req.params.id as unknown as number, req.body)
    .then(() => res.json({ message: "User updated" }))
    .catch(next);
});
