import express from "express";

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: "Test User",
    architecture: "monolith"
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: "Test User",
    architecture: "monolith"
  });
});


app.get("/users1/:id", async (req, res) => {
  const { id } = req.params;

  // Simulate database I/O
  await new Promise((resolve) => setTimeout(resolve, 50));

  res.json({
    id,
    name: "Test User",
    architecture: "monolith"
  });
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Monolith running on port ${PORT}`);
});