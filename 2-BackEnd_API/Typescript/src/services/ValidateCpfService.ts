import { IValidateCpfService } from "./IValidateCpfService";
import { CpfRepository } from "../repositories/CpfRepository";

class ValidateCpfService implements IValidateCpfService {
  constructor(private cpfRepository: CpfRepository) {}

  execute(cpfNumber: string): boolean {
    const validatedCpf = this.cpfRepository.IsCpf(cpfNumber);
    return validatedCpf;
  }
}
export { ValidateCpfService };
