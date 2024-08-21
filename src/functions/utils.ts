import * as vscode from "vscode";
import Window = vscode.window;
import Range = vscode.Range;

export function processSelection(formatCB: (this: any, ...args: any[]) => string, argsCB: any[]) {

  const e = Window.activeTextEditor!;
  const d = e.document;
  const sel = e.selections;

  function edit(edit: any) {
    for (let x = 0; x < sel.length; x++) {
      let txt: string = d.getText(new Range(sel[x].start, sel[x].end));

      if (argsCB.length > 0) {
        txt = formatCB(...argsCB);
      } else {
        txt = formatCB();
      }

      edit.insert(sel[x].start, txt);
    }
  }

  e.edit(edit);
}
