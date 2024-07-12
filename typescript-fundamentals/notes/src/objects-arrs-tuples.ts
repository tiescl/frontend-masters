//* Objects

let car: {
  make: string;
  model: string;
  year: number;
};

//? A function that prints info about a car to stdout
function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number; // optional property
}) {
  let str = `${car.make} ${car.model} (${car.year})`;
  if (typeof car.chargeVoltage == 'number') str += `// ${car.chargeVoltage}v`;
  console.log(str);
}

printCar({
  make: 'Honda',
  model: 'Accord',
  year: 2017
});

printCar({
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 220
});

//* Index signatures

//? Dictionary of phone #s
const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: '+1', area: '211', number: '652-4515' },
  work: { country: '+1', area: '670', number: '752-5856' },
  fax: { country: '+1', area: '322', number: '525-4357' }
};

//*  Array Types

const fileExtensions = ['js', 'ts'];
//  ^? string[]

const cars = [
  //? Let's look at an array of objects
  {
    make: 'Toyota',
    model: 'Corolla',
    year: 2002
  }
];

//* Tuples

let myCar = [2002, 'Toyota', 'Corolla'];
const [year, make, model] = myCar; //✔️ Destructuring

//? Inference doesn't work very well for tuples

myCar = ['Honda', 2017, 'Accord', 'Sedan']; //! Wrong convention

let myCar2: [number, string, string] = [2002, 'Toyota', 'Corolla'];
// myCar2 = ['Honda', 2017, 'Accord']; //! Wrong convention

//*  `readonly` tuples

const numPair: [number, number] = [4, 5]; //✔️ Valid

[101, 102, 103].length; //? number[].length
numPair.length; //? [number, number] length

numPair.push(6); // [4, 5, 6]
numPair.pop(); // [4, 5]
numPair.pop(); // [4]
numPair.pop(); // []

numPair.length; //! ❌ DANGER ❌

const roNumPair: readonly [number, number] = [4, 5];
roNumPair.length;
// roNumPair.push(6); // [4, 5, 6] //! Not allowed
// roNumPair.pop(); // [4, 5] //! Not allowed

export default {};
