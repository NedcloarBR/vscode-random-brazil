import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as CNPJ from "validation-br/dist/cnpj";

export function insertRandomCNPJ() {
  Window.showInputBox({
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
  Window.showInputBox({
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
      Window.showInformationMessage(isValid ? `O CNPJ: ${input} é valido.` : `O CNPJ: ${input} é invalido.`);
    }
  );
}
