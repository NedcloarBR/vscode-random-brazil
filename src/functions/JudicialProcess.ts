import * as vscode from "vscode";
import { processSelection } from "./utils";
import * as JudicialProcess from "validation-br/dist/judicialProcess";

export function insertRandomJudicialProcess() {
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
      processSelection(JudicialProcess.fake, [input!.toString().toUpperCase() === "S"]);
    }
  );
}

export function checkJudicialProcess() {
  vscode.window.showInputBox({
    prompt: "Digite o número do Processo Juridico (com ou sem pontuação) para validar",
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um número de Processo Juridico.";
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = JudicialProcess.validate(input!);
      if (isValid) {
        vscode.window.showInformationMessage(`O número do Processo Jurídico: ${input} é valido.`);
      } else {
        vscode.window.showErrorMessage(`O número do Processo Jurídico: ${input} é invalido.`);
      }
    }
  );
}
