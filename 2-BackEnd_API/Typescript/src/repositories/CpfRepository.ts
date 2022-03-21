import { IcpfRepository } from "./IcpfRepository";
class CpfRepository implements IcpfRepository {
  constructor() {}
  IsCpf = (cpfNumber: string): boolean => {
    if (typeof cpfNumber !== "string") return false;
    cpfNumber = cpfNumber.replace(/[\s.-]*/gim, "");
    if (
      !cpfNumber ||
      cpfNumber.length != 11 ||
      cpfNumber == "00000000000" ||
      cpfNumber == "11111111111" ||
      cpfNumber == "22222222222" ||
      cpfNumber == "33333333333" ||
      cpfNumber == "44444444444" ||
      cpfNumber == "55555555555" ||
      cpfNumber == "66666666666" ||
      cpfNumber == "77777777777" ||
      cpfNumber == "88888888888" ||
      cpfNumber == "99999999999"
    ) {
      return false;
    }
    var sum = 0;
    var rest;
    for (var i = 1; i <= 9; i++)
      sum = sum + parseInt(cpfNumber.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpfNumber.substring(9, 10))) return false;
    sum = 0;
    for (var i = 1; i <= 10; i++)
      sum = sum + parseInt(cpfNumber.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpfNumber.substring(10, 11))) return false;
    return true;
  };
}

export { CpfRepository };
