import * as vscode from "vscode";
import { processSelection } from "./utils";
import * as CNPJ from "validation-br/dist/cnpj";

export function insertRandomCNPJ() {
  vscode.window.showInputBox({
    prompt: "Gerar com pontuação? Digite S para Sim ou N para Não",
    validateInput: (value: string) => {
      const upperValue = value.toUpperCase();
      if (upperValue !== "S" && upperValue !== "N") {
        return "Por favor, digite apenas S ou N.";
      }
      return null;
    }
  }).then(
    function (input) {
      processSelection(CNPJ.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkCNPJ() {
  vscode.window.showInputBox({
    prompt: "Digite o CNPJ (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um CNPJ.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = CNPJ.validate(input!);
      if (isValid) {
        vscode.window.showInformationMessage(`O CNPJ: ${input} é valido.`);
      } else {
        vscode.window.showErrorMessage(`O CNPJ: ${input} é invalido.`);
      }
    }
  );
}
