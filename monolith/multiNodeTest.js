import cluster from "node:cluster";
import os from "node:os";
import express from "express";

const PORT = 3000;

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;

  console.log(`Primary process: ${process.pid}`);
  console.log(`Starting ${cpuCount} workers`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();

  app.get("/users1/:id", async (req, res) => {
    const { id } = req.params;

    // Same 50ms I/O simulation
    await new Promise((resolve) => setTimeout(resolve, 50));

    res.json({
      id,
      name: "Test User",
      architecture: "monolith-cluster"
    });
  });

  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on ${PORT}`);
  });
}