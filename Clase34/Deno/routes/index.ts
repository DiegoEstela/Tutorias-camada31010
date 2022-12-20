import { Router } from "../devDepencies.ts";
import { findUserAll, findUserById, createUser } from "../helpers/users.ts";

export const router = new Router()
.get("/api/users", findUserAll)
.get("/api/users/:id", findUserById)
.post("/api/users", createUser)
