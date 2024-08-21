import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as RENAVAM from "validation-br/dist/renavam";

export function insertRandomRENAVAM() {
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
      processSelection(RENAVAM.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkRENAVAM() {
  Window.showInputBox({
    prompt: "Digite um RENAVAM (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um RENAVAM.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = RENAVAM.validate(input!);
      Window.showInformationMessage(isValid ? `O RENAVAM: ${input} é valido.` : `O RENAVAM: ${input} é invalido.`);
    }
  );
}
