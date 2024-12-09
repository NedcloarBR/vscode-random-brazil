import { window, l10n } from "vscode";
import { settings, SettingsOptions } from "./settings";
import { Localization } from "./localization";

export function processSelection(formatCB: (this: any, ...args: any[]) => string, argsCB: any[]): void {

  const editor = window.activeTextEditor!;
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
      window.showInputBox({
        prompt: l10n.t(Localization.punctuationPrompt),
        validateInput: (value: string) => {
          const upperValue = value.toUpperCase();
          if (!["S", "N", "Y"].includes(upperValue)) {
            return l10n.t(Localization.confirmWrong);
          }
          return null;
        }
      }).then((input) => {
        if(!input) return;
        return processSelection(generator, [input?.toString().toUpperCase() === "S"]);
      });
      break;
    case SettingsOptions.enabled:
      return processSelection(generator, [true]);
    case SettingsOptions.disabled:
      return processSelection(generator, [false]);
      
  }
}

export function validate(validator: any, document: string): void {
  window.showInputBox({
    prompt: l10n.t(Localization.documentPrompt, { document }),
    validateInput: (value: string) => {
      if (!value) {
        return l10n.t(Localization.enterDocument);
      }
      return null;
    }
  }).then((input) => {
    if(!input) return;
    const isValid = validator(input);
    if(settings.notification) {
      if(isValid) {
        return window.showInformationMessage(l10n.t(Localization.documentValid, { document, input }));
      } else {
        return window.showErrorMessage(l10n.t(Localization.documentInvalid, { document, input }));
      }
    }
  });
}
