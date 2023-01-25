import express from "express";
import morgan from "morgan"
import cors from "cors"

import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"

const app = express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => res.json({message: "Hola mundo"}))

app.use("/user", userRoutes)
app.use("/auth", authRoutes)

export default app