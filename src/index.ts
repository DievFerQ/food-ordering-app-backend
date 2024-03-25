import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import MyUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to database!")).catch((error) => console.error('Error connecting to database', error));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({message: 'Health OK!'});
})

app.use("/api/my/user", MyUserRoute);

app.listen(8000, () => {
    console.log("Server started on localhost 8000")
});