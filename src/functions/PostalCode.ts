import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as PostalCode from "validation-br/dist/postalCode";

export function insertRandomPostalCode() {
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
      processSelection(PostalCode.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkPostalCode() {
  Window.showInputBox({
    prompt: "Digite um Código de Rastreio dos Correios (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um Código de Rastreio dos Correios.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = PostalCode.validate(input!);
      Window.showInformationMessage(isValid ? `O Código de Rastreio dos Correios: ${input} é valido.` : `O Código de Rastreio dos Correios: ${input} é invalido.`);
    }
  );
}
