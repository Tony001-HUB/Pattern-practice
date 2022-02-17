import {IUser} from "../models/user";

interface Builder {
  setUserName(): void;
  setUserAge(): void;
  setUserTown(): void;
  setUserOtherInfo(): void;
}

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    console.log(builder)
    this.builder = builder;
  }

  public buildMinimalAboutUser(): void {
    this.builder.setUserName();
  }

  public buildFullAboutUser(): void {
    this.builder.setUserName();
    this.builder.setUserAge();
    this.builder.setUserTown();
    this.builder.setUserOtherInfo();
  }
}

export class ConcreteBuilder1 implements Builder {
  private product: AboutMeObject;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new AboutMeObject();
  }

  public setUserName(): void {
    this.product.userInfo.name = 'Anton';
  }

  public setUserAge(): void {
    this.product.userInfo.age = 21;
  }

  public setUserTown(): void {
    this.product.userInfo.town = 'Minsk';
  }

  public setUserOtherInfo(): void {
    this.product.userInfo.otherInfo = {"learn": 'Angular'};
  }

  public getProduct(): AboutMeObject {
    const result = this.product;
    this.reset();
    return result;
  }
}

class AboutMeObject {
  public userInfo: IUser = {};

  public showUserInfo(): void {
    console.log(`User: ${JSON.stringify(this.userInfo)}`);
  }
}

