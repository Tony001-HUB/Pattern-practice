interface Product {
  carBrand: string;
  dateOfCreation(): string;
  costCar(): number;
}

export abstract class Creator {

  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: машина марки ${product.carBrand} была сделана ${product.dateOfCreation()}, а так же стоит ${product.costCar()} $`;
  }
}

export class BMWRelease extends Creator {
  public factoryMethod(): Product {
    return new BMW();
  }
}

export class MazdaRelease extends Creator {
  public factoryMethod(): Product {
    return new Mazda();
  }
}

class Mazda implements Product {
  public carBrand: string = 'Mazda';

  public dateOfCreation(): string {
    return '14.02.2022';
  }
  public costCar(): number {
    return 90000;
  }
}

class BMW implements Product {
  public carBrand: string = 'BMW';

  public dateOfCreation(): string {
    return '15.02.2022';
  }
  public costCar(): number {
    return 100000;
  }
}

//когда мы не знаем, какой новый объект нам надо реализовать, то ли это будет какой-то пользователь, то ли новый вид траспорта
//когда заранее неизвестны типы и зависимости объектов, с которыми должен работать ваш код.

/*
  +Избавляет класс от привязки к конкретным классампродуктов.
  +Выделяет код производства продуктов в одно место, упрощая поддержку кода.
  +Упрощает добавление новых продуктов в программу.
  +Реализует принцип открытости/закрытости.
  -Может привести к созданию больших параллельных иерархий классов, так как для каждого класса продукта надо
создать свой подкласс создателя.
 */
