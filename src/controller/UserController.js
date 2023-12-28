import { UsersModel } from "../model/UserModel.js"

export const getUsers = async (req, res) => {

    try {
        const user = await UsersModel.find({})
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }

}

export const getUsersById = async (req, res) => {

    try {
        const { id } = req.params
        const user = await UsersModel.findById(id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }

}

export const createUser = async (req, res) => {
    try {
        const { name, age } = req.body
        const user = new UsersModel({ name, age })
        await user.save()
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
}

export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { name, age } = req.body
        const newUser = await UsersModel.findByIdAndUpdate(id, { name, age })
        newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteUsers = async (req, res) => {
    const { id } = req.params
    const user = await UsersModel.findByIdAndDelete(id)
    res.send(user)
}