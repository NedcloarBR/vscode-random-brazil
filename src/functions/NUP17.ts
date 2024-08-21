import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as NUP17 from "validation-br/dist/nup17";

export function insertRandomNUP17() {
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
      processSelection(NUP17.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkNUP17() {
  Window.showInputBox({
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
      Window.showInformationMessage(isValid ? `O NUP17: ${input} é valido.` : `O NUP17: ${input} é invalido.`);
    }
  );
}
