import * as vscode from 'vscode';
import * as CPF from "validation-br/dist/cpf";
import * as CNPJ from "validation-br/dist/cnpj";
import * as CNH from "validation-br/dist/cnh";
import * as EleitoralTitle from "validation-br/dist/tituloEleitor";
import * as JudicialProcess from "validation-br/dist/judicialProcess";
import * as NUP17 from "validation-br/dist/nup17";
import * as PISPasep from "validation-br/dist/pisPasep";
import * as PostalCode from "validation-br/dist/postalCode";
import * as RENAVAM from "validation-br/dist/renavam";
import { settings } from './settings';
import { generate, validate } from './utils';

export function activate(context: vscode.ExtensionContext) {
  if (!settings.enabled) {
    console.log('The extension "random-brazil" is disabled');
    return;
  }

  console.log('The extension "random-brazil" is enabled');

  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcpf", () => generate(CPF.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcpf", () => validate(CPF.validate, "CPF")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcnpj", () => generate(CNPJ.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcnpj", () => validate(CNPJ.validate, "CNPJ")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomcnh", () => generate(CNH.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkcnh", () => validate(CNH.validate, "CNH")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomnup17", () => generate(NUP17.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checknup17", () => validate(NUP17.validate, "NUP17")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomjudicialprocess", () => generate(JudicialProcess.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkjudicialprocess", () => validate(JudicialProcess.validate, "Processo Judicial")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randompispasep", () => generate(PISPasep.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkpispasep", () => validate(PISPasep.validate, "PIS/Pasep")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomeleitoraltitle", () => generate(EleitoralTitle.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkeleitoraltitle", () => validate(EleitoralTitle.validate, "Titulo Eleitoral")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randompostalcode", () => generate(PostalCode.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkpostalcode", () => validate(PostalCode.validate, "Rastreamento Correios")));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.randomrenavam", () => generate(RENAVAM.fake)));
  context.subscriptions.push(vscode.commands.registerCommand("random-brazil.checkrenavam", () => validate(RENAVAM.validate, "RENAVAM")));
}

export function deactivate() { 
  console.log('The extension "random-brazil" is disabled');
}
