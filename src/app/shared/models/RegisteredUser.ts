/*
 * ---------------------------------------------
 * Author: Jay Christopher A Anacio
 * Date:   Saturday August 12th 2023
 * Last Modified by: Jay Christopher A Anacio - <jcaanacio@gmail.com>
 * Last Modified time: August 12th 2023, 3:31:05 am
 * ---------------------------------------------
 */

export enum UseRole {
  EMPLOYEE,
}

export interface IRegisteredUser {
  userId: number;
  username: string;
  userRole: UseRole;
  createdAt: Date;
  updatedAt: Date;
}

export class RegisteredUser implements IRegisteredUser {
  userId: number;
  username: string;
  userRole: UseRole;
  createdAt: Date;
  updatedAt: Date;

  constructor(opts: IRegisteredUser) {
    this.createdAt = opts.createdAt;
    this.updatedAt = opts.updatedAt;
    this.userId = opts.userId;
    this.userRole = opts.userRole;
    this.username = opts.username;
  }
}
