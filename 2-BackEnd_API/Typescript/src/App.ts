import express, { json } from "express";
import { cpfRoute } from "./routes/cpf.routes";

const app = express();

const PORT = 3333;
app.use(json());

app.use("/cpf", cpfRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
