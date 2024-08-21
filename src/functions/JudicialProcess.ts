import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as JudicialProcess from "validation-br/dist/judicialProcess";

export function insertRandomJudicialProcess() {
  Window.showInputBox({
    prompt: 'Gerar com pontuação? Digite S para Sim ou N para Não',
    validateInput: (value: string) => {
      const upperValue = value.toUpperCase();
      if (upperValue !== 'S' && upperValue !== 'N') {
        return 'Por favor, digite apenas S ou N.';
      }
      return null;
    }
  }).then(
    function (input) {
      processSelection(JudicialProcess.fake, [input!.toString().toUpperCase() === "S"])
    }
  )
}

export function checkJudicialProcess() {
  Window.showInputBox({
    prompt: 'Digite o número do Processo Juridico (com ou sem pontuação) para validar',
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um número de Processo Juridico."
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = JudicialProcess.validate(input!);
      Window.showInformationMessage(isValid ? `O número do Processo Juridico: ${input} é valido.` : `O número do Processo Juridico: ${input} é invalido.`)
    }
  )
}
