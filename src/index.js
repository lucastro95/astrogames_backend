import app from "./app.js"
import "./database.js"
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
})