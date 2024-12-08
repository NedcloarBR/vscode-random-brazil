import * as vscode from "vscode";
import { processSelection } from "./utils";
import * as PISPasep from "validation-br/dist/pisPasep";

export function insertRandomPISPasep() {
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
      processSelection(PISPasep.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkPISPasep() {
  vscode.window.showInputBox({
    prompt: "Digite um PIS Pasep (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um PIS Pasep.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = PISPasep.validate(input!);
      vscode.window.showInformationMessage(isValid ? `O PIS Pasep: ${input} é valido.` : `O PIS Pasep: ${input} é invalido.`);
    }
  );
}
