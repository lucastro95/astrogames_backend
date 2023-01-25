import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        const user = await new User({
            name,
            email, 
            password
        })

        user.password = await User.encryptPassword(user.password)

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}