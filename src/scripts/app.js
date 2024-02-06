class Carlass {
  #carBrand;

  #carModel;

  #carMileage;

  constructor(carBrand, carModel, carMileage) {
    this.#carBrand = carBrand;
    this.#carModel = carModel;
    this.#carMileage = carMileage;
  }

  info() {
    console.log(`Марка: ${this.#carBrand}. Модель: ${this.#carModel}. Пробег: ${this.#carMileage}`);
  }

  get carMileage() {
    return this.#carMileage;
  }

  set carMileage(km) {
    this.#carMileage += km; //или this.#_carMileage = km;
  }
}

const car = new Carlass('Audi', 'A6', 0);
car.carMileage = 100;
car.carMileage = 300;
car.info();
