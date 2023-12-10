import { Router } from "express";

import * as UsersController from "../controllers/users";

const UsersRouter = Router();

UsersRouter.get("/", UsersController.getByParams);

export {
    UsersRouter
}