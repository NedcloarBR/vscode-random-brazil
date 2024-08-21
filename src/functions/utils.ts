import * as vscode from "vscode";
import Window = vscode.window;
import Range = vscode.Range;

export function processSelection(formatCB: (this: any, ...args: any[]) => string, argsCB: any[]) {

  let e = Window.activeTextEditor!;
  let d = e.document;
  let sel = e.selections;

  function edit(edit: any) {
    for (let x = 0; x < sel.length; x++) {
      let txt: string = d.getText(new Range(sel[x].start, sel[x].end));

      if (argsCB.length > 0) {
        txt = formatCB.apply(undefined, argsCB);
      } else {
        txt = formatCB.apply(undefined);
      }

      edit.insert(sel[x].start, txt);
    }
  }

  e.edit(edit);
}
