import * as vscode from "vscode";
import { processSelection } from "./utils";
import * as EleitoralTitle from "validation-br/dist/tituloEleitor";

export function insertRandomEleitoralTitle() {
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
      processSelection(EleitoralTitle.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkEleitoralTitle() {
  vscode.window.showInputBox({
    prompt: "Digite um Titulo de Eleitor (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um Titulo de Eleitor.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = EleitoralTitle.validate(input!);
      if (isValid) {
        vscode.window.showInformationMessage(`O Titulo de Eleitor: ${input} é valido.`);
      } else {
        vscode.window.showErrorMessage(`O Titulo de Eleitor: ${input} é invalido.`);
      }
    }
  );
}
