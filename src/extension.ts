import * as vscode from 'vscode';
import { Settings } from './settings';
import { checkCNH, checkCNPJ, checkCPF, insertRandomCNH, insertRandomCNPJ, insertRandomCPF } from './functions';

export function activate(context: vscode.ExtensionContext) {
  const settings = new Settings();

  if (!settings.enabled) {
    console.log("The extension \"random-brazil\" is disabled");
    return;
  }

  console.log('The extension \"random-brazil\" is enabled');

  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcpf", insertRandomCPF));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcpf", checkCPF));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcnpj", insertRandomCNPJ));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcnpj", checkCNPJ));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcnh", insertRandomCNH));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcnh", checkCNH));
}

export function deactivate() { }
