const express = require("express");
const blogRoutes = require("./src/blog/routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.status(200).send("All good here");
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
