
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
import { commands, ExtensionContext } from "vscode";

export function activate(context: ExtensionContext) {
  if (!settings.enabled) {
    console.log('The extension "random-brazil" is disabled');
    return;
  }

  console.log('The extension "random-brazil" is enabled');

  context.subscriptions.push(commands.registerCommand("random-brazil.generate.cpf", () => generate(CPF.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.cpf", () => validate(CPF.validate, "CPF")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.cnpj", () => generate(CNPJ.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.cnpj", () => validate(CNPJ.validate, "CNPJ")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.cnh", () => generate(CNH.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.cnh", () => validate(CNH.validate, "CNH")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.nup17", () => generate(NUP17.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.nup17", () => validate(NUP17.validate, "NUP17")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.judicial-process", () => generate(JudicialProcess.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.judicial-process", () => validate(JudicialProcess.validate, "Processo Judicial")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.pis-pasep", () => generate(PISPasep.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.pis-pasep", () => validate(PISPasep.validate, "PIS/Pasep")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.eleitoral-title", () => generate(EleitoralTitle.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.eleitoral-title", () => validate(EleitoralTitle.validate, "Titulo Eleitoral")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.postal-code", () => generate(PostalCode.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.postal-code", () => validate(PostalCode.validate, "Rastreamento Correios")));
  context.subscriptions.push(commands.registerCommand("random-brazil.generate.renavam", () => generate(RENAVAM.fake)));
  context.subscriptions.push(commands.registerCommand("random-brazil.validate.renavam", () => validate(RENAVAM.validate, "RENAVAM")));
}

export function deactivate() { 
  console.log('The extension "random-brazil" is disabled');
}
