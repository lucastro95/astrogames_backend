import User from "../models/User.js"
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    try {
        const {name, email, password} = req.body

        const newUser = new User({
            name, 
            email,
            password: await User.encryptPassword(password)
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
            expiresIn: 84600
        })

        return res.status(200).json({message: "Login successful"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const signIn = async (req, res) => {
    try {
      const userFound = await User.findOne({ email: req.body.email })
  
      if (!userFound) return res.status(400).json({ message: "User Not Found" });
  
      const matchedPassword = await User.comparePassword(
        req.body.password,
        userFound.password
      );
  
      if (!matchedPassword)
        return res.status(401).json({
          token: null,
          message: "Incorrect Password",
        });
  
      const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
        expiresIn: 84600, // 24 horas
      });

      res.cookie("una cookie", "prueba")


      return res.status(200).json({ userFound });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };