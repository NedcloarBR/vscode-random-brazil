import * as vscode from 'vscode';
import { Settings } from './settings';
import { checkCNH, checkCNPJ, checkCPF, checkNUP17, insertRandomCNH, insertRandomCNPJ, insertRandomCPF, insertRandomNUP17, checkJudicialProcess, insertRandomJudicialProcess, insertRandomPISPasep, checkPISPasep, insertRandomEleitoralTitle, checkEleitoralTitle } from './functions';

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
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomnup17", insertRandomNUP17));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checknup17", checkNUP17));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomjudicialprocess", insertRandomJudicialProcess));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkjudicialprocess", checkJudicialProcess));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomrandompispasep", insertRandomPISPasep));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkrandompispasep", checkPISPasep));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomrandomeleitoraltitle", insertRandomEleitoralTitle));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkrandomeleitoraltitle", checkEleitoralTitle));
}

export function deactivate() { }
