import { Router } from "express";
import { userService } from "../_helpers/service";

export const userRouter = Router();

// DELETE /api/users/:id
userRouter.delete("/:id", async (req, res, next) => {
  userService
    .delete(Number(req.params.id))
    .then(() => res.json({ message: "User deleted" }))
    .catch(next);
});
