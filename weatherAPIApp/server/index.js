//This will be the SERVER

import express from "express";
import cors from "cors";

const app = express();
const PORT = 8001;


app.use(cors());

app.listen(PORT, () => console.log(`Back-end server is running on port: ${PORT}.`));
