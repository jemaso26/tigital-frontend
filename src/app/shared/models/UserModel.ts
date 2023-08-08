export class UserModel {
  private _firstName: String;
  private _lastName: String;
  private _email: String;
  private _phone: String;

  constructor(opts: {
    firstName: String;
    lastName: String;
    email: String;
    phone: string;
  }) {
    this._lastName = opts.lastName;
    this._firstName = opts.firstName;
    this._email = opts.email;
    this._phone = opts.phone;
  }

  public get firstName(): String {
    return this._firstName;
  }
  public set firstName(value: String) {
    this._firstName = value;
  }

  public get lastName(): String {
    return this._lastName;
  }
  public set lastName(value: String) {
    this._lastName = value;
  }

  public get email(): String {
    return this._email;
  }
  public set email(value: String) {
    this._email = value;
  }

  public get phone(): String {
    return this._phone;
  }
  public set phone(value: String) {
    this._phone = value;
  }
}
