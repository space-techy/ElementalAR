import express from "express";
import fs from "fs";
import https from "https";


const options = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert"),
}

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
