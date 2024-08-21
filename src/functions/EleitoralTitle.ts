import * as vscode from "vscode";
import Window = vscode.window;
import { processSelection } from "./utils";
import * as EleitoralTitle from "validation-br/dist/tituloEleitor";

export function insertRandomEleitoralTitle() {
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
      processSelection(EleitoralTitle.fake, [input!.toString().toUpperCase() === "S"])
    }
  )
}

export function checkEleitoralTitle() {
  Window.showInputBox({
    prompt: 'Digite um Titulo de Eleitor (com ou sem pontuação) para validar',
    validateInput: (value: string) => {
      if (!value) {
        return "Digite um Titulo de Eleitor."
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = EleitoralTitle.validate(input!);
      Window.showInformationMessage(isValid ? `O Titulo de Eleitor: ${input} é valido.` : `O Titulo de Eleitor: ${input} é invalido.`)
    }
  )
}
