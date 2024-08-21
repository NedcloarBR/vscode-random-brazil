import * as vscode from 'vscode';
import workspace = vscode.workspace;

abstract class BaseSettings {
  protected readSetting<T>(name: string, defaultValue: T): T {
    let configuration = workspace.getConfiguration();
    let value = configuration.get<T | undefined>(name, undefined);

    if (value !== undefined && value !== null) {
      return value;
    }
    return defaultValue;
  }
}

export class Settings extends BaseSettings {
  private _enabled: boolean;

  constructor() {
    super();

    this._enabled = this.readSetting<boolean>("random-brazil.enabled", true);
  }

  public get enabled(): boolean {
    return this._enabled;
  }
}