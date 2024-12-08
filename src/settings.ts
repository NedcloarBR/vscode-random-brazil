import * as vscode from 'vscode';

abstract class BaseSettings {
  protected readSetting<T>(name: string, defaultValue: T): T {
    const configuration = vscode.workspace.getConfiguration();
    const value = configuration.get<T | undefined>(name, undefined);

    if (value !== undefined && value !== null) {
      return value;
    }
    return defaultValue;
  }
}

export enum SettingsOptions {
  enabled = "enabled",
  disabled = "disabled",
  ask = "ask"
}

class Settings extends BaseSettings {
  private _enabled!: boolean;
  private _punctuation!: SettingsOptions;
  private _notification!: boolean;

  public constructor() {
    super();
    this.updateSettings();

    vscode.workspace.onDidChangeConfiguration(() => {
      this.updateSettings();
    });
  }

  private updateSettings(): void {
    this._enabled = this.readSetting<boolean>("random-brazil.enabled", true);
  }

  public get enabled(): boolean {
    return this._enabled;
  }
}

export const settings = new Settings();