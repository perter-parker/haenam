const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "..", "public");

app.use(express.static(publicDir));

app.get("/", (_req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/brain", (_req, res) => {
    res.sendFile(path.join(publicDir, "brain.html"));
});

app.get("/program", (_req, res) => {
    res.sendFile(path.join(publicDir, "program.html"));
});

app.get("/program2", (_req, res) => {
    res.sendFile(path.join(publicDir, "program2.html"));
});

app.use((_req, res) => {
    res.status(404).send("요청하신 페이지를 찾을 수 없습니다.");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

