import * as vscode from "vscode";
import { processSelection } from "./utils";
import * as NUP17 from "validation-br/dist/nup17";

export function insertRandomNUP17() {
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
      processSelection(NUP17.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkNUP17() {
  vscode.window.showInputBox({
    prompt: "Digite o NUP17 (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um NUP17.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = NUP17.validate(input!);
      if (isValid) {
        vscode.window.showInformationMessage(`O NUP17: ${input} é valido.`);
      } else {
        vscode.window.showErrorMessage(`O NUP17: ${input} é invalido.`);
      }
    }
  );
}
