import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as CEP from "validation-br/dist/postalCode";

export function insertRandomCEP() {
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
      processSelection(CEP.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkCEP() {
  Window.showInputBox({
    prompt: "Digite um CEP (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um CEP.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = CEP.validate(input!);
      Window.showInformationMessage(isValid ? `O CEP: ${input} é valido.` : `O CEP: ${input} é invalido.`);
    }
  );
}
