export class UserModel {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phone: string;

  constructor(opts: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }) {
    this._lastName = opts.lastName;
    this._firstName = opts.firstName;
    this._email = opts.email;
    this._phone = opts.phone;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }
}
