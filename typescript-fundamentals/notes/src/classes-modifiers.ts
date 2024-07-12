//* Classes

//? Field types
class Car {
  static {
    // `this` is the static scope
    fetch('https://api.example.com/vin_number_data')
      .then((response) => response.json())
      .then((data) => {
        this.#nextSerialNumber = data.mostRecentInvoiceId + 1;
      });
  }

  readonly #serialNumber = Car.generateSerialNumber();
  protected get serialNumber() {
    return this.#serialNumber;
  }

  static #nextSerialNumber: number;
  private static generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  constructor(public make: string, public model: string, public year: number) {}

  honk(duration: number): string {
    return `h${'o'.repeat(duration)}nk`;
  }

  getLabel() {
    return `${this.make} ${this.model} ${this.year} - #${this.serialNumber}`;
  }

  equals(other: unknown) {
    if (other && typeof other === 'object' && #serialNumber in other) {
      other;
      return other.#serialNumber == this.#serialNumber;
    }
    return false;
  }
}

let sedan = new Car('Honda', 'Accord', 2017);
// sedan.activateTurnSignal("left") //! not safe!
// new Car(2017, "Honda", "Accord") //! not safe!

//? method types
sedan.honk(5); // "hooooonk"

//? static member fields

console.log(new Car('Honda', 'Accord', 2017));
console.log(new Car('Toyota', 'Camry', 2022));

//* Private field presence checks

//* Parameter properties

class Base {}

class Car2 extends Base {
  foo = console.log('class field initializer');
  constructor(public make: string) {
    super();
    console.log('custom constructor stuff');
  }
}

//* Overrides

export default {};
