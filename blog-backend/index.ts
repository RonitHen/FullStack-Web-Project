import express from 'express';
import activityLogger from './middlewares/activityLogger';
import postsRoutes from "./routes/postsRoutes";

const app = express();
app.use(express.json());
app.use(activityLogger);
const port = 3000;

app.use("/posts", postsRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})