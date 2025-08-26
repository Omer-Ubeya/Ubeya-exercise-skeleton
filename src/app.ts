import express from "express";
import { sequelize } from "./db";
import { initModels } from "./models";
import routes from "./routes/routes";

const app = express();
app.use(express.json());

app.use("/", routes);

async function start() {
  try {
    initModels();
    await sequelize.sync({ force: true });
    const port = process.env.PORT || 3900;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
