import { Router } from "../devDepencies";
import { findUserAll, findUserById, createUser } from "../helpers/users";

export const router = new Router()
.get("/api/users", findUserAll)
.get("/api/users/:id", findUserById)
.post("/api/users", createUser)
