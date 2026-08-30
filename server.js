const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4173;
const root = path.join(__dirname, "public");

app.use(express.static(root));
app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`the-hierarchy-and-design  http://localhost:${PORT}`);
});
