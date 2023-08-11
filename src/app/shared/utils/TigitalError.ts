/*
 * ---------------------------------------------
 * Author: Jay Christopher A Anacio
 * Date:   Saturday August 12th 2023
 * Last Modified by: Jay Christopher A Anacio - <jcaanacio@gmail.com>
 * Last Modified time: August 12th 2023, 3:21:58 am
 * ---------------------------------------------
 */

export enum Scope {
  CLIENT,
  SERVER,
  USER,
}

export interface ITigitalError {
  module: string;
  scope: Scope;
  message: string;
}

export class TigitalError extends Error implements ITigitalError {
  private _scope: Scope;
  private _module: string;
  private _message: string;

  constructor(opts: ITigitalError) {
    super(opts.message);
    this._message = opts.message;
    this._module = opts.module;
    this._scope = opts.scope;
  }

  public override get message(): string {
    return this._message;
  }

  public override set message(value: string) {
    this._message = value;
  }

  public get module(): string {
    return this._module;
  }

  public set module(value: string) {
    this._module = value;
  }

  public get scope(): Scope {
    return this._scope;
  }

  public set scope(value: Scope) {
    this._scope = value;
  }
}
