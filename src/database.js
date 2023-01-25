import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/astrogames", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("DB conectada"))
.catch(err => console.log("Error:", err))