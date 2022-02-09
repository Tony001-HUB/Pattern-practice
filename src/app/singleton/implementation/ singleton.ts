export class User {
  private static userInstance: User;
  private _name: string;
  private _age: number;

  private constructor() {}

  public static getInstance(): User {
    if (!User.userInstance) {
      User.userInstance = new User();
    }
    return User.userInstance;
  }

  set name(name: string) {
      this._name = name;
  }

  set age(age: number) {
    this._age = age;
  }

  get age(): number  {
    return this._age;
  }

  get name(): string  {
    return this._name;
  }
}
