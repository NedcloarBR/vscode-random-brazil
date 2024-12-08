import * as vscode from "vscode";
import { processSelection } from "./utils";
import * as CNH from "validation-br/dist/cnh";

export function insertRandomCNH() {
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
      processSelection(CNH.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkCNH() {
  vscode.window.showInputBox({
    prompt: "Digite o CNH (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um CNH.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = CNH.validate(input!);
      if (isValid) {
        vscode.window.showInformationMessage(`O CNH: ${input} é valido.`);
      } else {
        vscode.window.showErrorMessage(`O CNH: ${input} é invalido.`);
      }
    }
  );
}
