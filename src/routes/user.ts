import { Router } from "express";
import { userService } from "../_helpers/service";

export const userRouter = Router();


// DELETE /api/users/:id
userRouter.delete("/:id", async (req, res, next) => {
  userService
    .delete(Number(req.params.id))
    .then(() => res.json({ message: "User deleted" }))

// PUT /api/users/:id
userRouter.put("/:id", async (req, res, next) => {
  userService
    .update(req.params.id as unknown as number, req.body)
    .then(() => res.json({ message: "User updated" }))

    .catch(next);
});
