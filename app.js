import express from "express";
import path from "path";
import { dirname } from 'splendid-ui/node'
import cors from "cors";

const app = express();
const PORT = 3000;

const __dirname = dirname(import.meta.url)
const publicDir = path.join(__dirname, '');
app.use("/", express.static(publicDir));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
