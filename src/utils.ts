import * as vscode from "vscode";
import { settings, SettingsOptions } from "./settings";

export function processSelection(formatCB: (this: any, ...args: any[]) => string, argsCB: any[]): void {

  const editor = vscode.window.activeTextEditor!;
  const selections = editor.selections;

  function edit(edit: any) {
    for (const selection of selections) {
      let txt: string;
      if (argsCB.length > 0) {
        txt = formatCB(...argsCB);
      } else {
        txt = formatCB();
      }

      edit.insert(selection.start, txt);
    }
  }

  editor.edit(edit);
}

export function generate(generator: any): void {
  switch (settings.punctuation) {
    case SettingsOptions.ask:
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
          return processSelection(generator, [input!.toString().toUpperCase() === "S"]);
        }
      );
      break;
    case SettingsOptions.enabled:
      return processSelection(generator, [true]);
    case SettingsOptions.disabled:
      return processSelection(generator, [false]);
      
  }
}

export function validate(validator: any, document: string): void {
  vscode.window.showInputBox({
    prompt: `Digite o ${document} (com ou sem pontuação) para validar`,
    validateInput: (value: string) => {
      if (!value) {
        return `Digite um ${document}.`;
      }
      return null;
    }
  }).then(
    function (input) {
      const isValid = validator(input!);
      if(settings.notification) {
        if(isValid) {
          return vscode.window.showInformationMessage(`O ${document}: ${input} é valido.`);
        } else {
          return vscode.window.showErrorMessage(`O ${document}: ${input} é invalido.`);
        }
      }
    }
  );
}
