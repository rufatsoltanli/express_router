import mongoose from 'mongoose';
import express from "express"
import { UserRouter } from './src/router/UserRouter.js';

const app = express()
const port = 3000
app.use(express.json())

app.use("/users/",UserRouter)

mongoose.connect('mongodb+srv://rufatsoltanly:862450rr@cluster0.ckefgjq.mongodb.net/')
.then(console.log("connected"))
// .catch(console.log(Error.me);)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})