import * as vscode from 'vscode';
import { Settings } from './settings';
import {
  checkCEP,
  checkCNH,
  checkCNPJ,
  checkCPF,
  checkEleitoralTitle,
  checkJudicialProcess,
  checkNUP17,
  checkPISPasep,
  checkRENAVAM,
  insertRandomCEP,
  insertRandomCNH,
  insertRandomCNPJ,
  insertRandomCPF,
  insertRandomEleitoralTitle,
  insertRandomJudicialProcess,
  insertRandomNUP17,
  insertRandomPISPasep,
  insertRandomRENAVAM
} from './functions';

export function activate(context: vscode.ExtensionContext) {
  const settings = new Settings();

  if (!settings.enabled) {
    console.log('The extension "random-brazil" is disabled');
    return;
  }

  console.log('The extension "random-brazil" is enabled');

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
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randompispasep", insertRandomPISPasep));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkpispasep", checkPISPasep));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomeleitoraltitle", insertRandomEleitoralTitle));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkeleitoraltitle", checkEleitoralTitle));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcep", insertRandomCEP));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcep", checkCEP));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomrenavam", insertRandomRENAVAM));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkrenavam", checkRENAVAM));
}

export function deactivate() { }
