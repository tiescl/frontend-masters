//* A motivating use case

const phoneList = [
  { customerId: '0001', areaCode: '321', num: '123-4566' },
  { customerId: '0002', areaCode: '174', num: '142-3626' },
  { customerId: '0003', areaCode: '192', num: '012-7190' },
  { customerId: '0005', areaCode: '402', num: '652-5782' },
  { customerId: '0004', areaCode: '301', num: '184-8501' }
];

interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

//? function body
// create an empty dictionary

// return the dictionary

//? An attempt to generalize the above function to work with any type of list

//* Defining a type parameter

function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  var dict: { [k: string]: T } = {};

  list.forEach((item) => {
    let key = idGen(item);
    dict[key] = item;
  });
  return dict;
}

function wrapInArray<T>(arg: T): [T] {
  return [arg];
}
wrapInArray(3);
wrapInArray(new Date());
wrapInArray(new RegExp('/s/'));

//? Let's try it!
console.log(
  listToDict(
    [
      new Date('10-01-2021'),
      new Date('03-14-2021'),
      new Date('06-03-2021'),
      new Date('09-30-2021'),
      new Date('02-17-2021'),
      new Date('05-21-2021')
    ],
    (arg) => arg.toISOString()
  )
);

console.log(listToDict(phoneList, (arg) => arg.customerId));

export default {};
