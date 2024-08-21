import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as CPF from "validation-br/dist/cpf";

export function insertRandomCPF() {
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
    function(input) {
      processSelection(CPF.fake, [input!.toString().toUpperCase() === "S"])
    }
  )
}

export function checkCPF() {
  Window.showInputBox({
    prompt: 'Digite o CPF (com ou sem pontuação) para validar',
    validateInput: (value: string) => {
      if(!value) {
        return "Digite um CPF."
      }
      return null;
    }
  }).then(
    function(input) {
      const isValid = CPF.validate(input!);
      Window.showInformationMessage(isValid ? `O CPF: ${input} é valido.` : `O CPF: ${input} é invalido.`)
    }
  )
}
