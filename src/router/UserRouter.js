import { Router } from "express";
import { createUser, deleteUsers, getUsers, getUsersById, updateUsers } from "../controller/UserController.js";

export const UserRouter = Router()


UserRouter.get('/', getUsers)

UserRouter.get('/:id', getUsersById)

UserRouter.post('/', createUser)

UserRouter.put('/:id', updateUsers)

UserRouter.delete('/:id', deleteUsers)