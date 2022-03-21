import { CPF } from "../models/CPF";
import { Router, Request, Response } from "express";
import { CpfRepository } from "../repositories/CpfRepository";
import { ValidateCpfService } from "../services/ValidateCpfService";

const cpfRoute = Router();
const cpfRepository = new CpfRepository();

cpfRoute.post("/", (request: Request, response: Response) => {
  const { cpfNumber }: CPF = request.body;

  const validateCpfService = new ValidateCpfService(cpfRepository);
  const result = validateCpfService.execute(cpfNumber);

  if (result) {
    return response
      .status(202)
      .json({ message: `CPF validado com sucesso ${cpfNumber}`, result });
  }

  if (!result)
    return response
      .status(400)
      .send({ message: `CPF INVALIDO ${cpfNumber}`, result });
});

export { cpfRoute };
