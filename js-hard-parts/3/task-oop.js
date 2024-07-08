/*** CHALLENGE 1 ***/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;

  return obj;
}

const vicky = makePerson('Vicky', 24);

// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/*** CHALLENGE 2 ***/

const personStore = {
  greet: () => {
    console.log('Hello');
  }
};

// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
  let person = Object.create(personStore);
  person.name = name;
  person.age = age;

  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/

// add code here
personStore.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/*** CHALLENGE 5 ***/

function PersonConstructor() {
  this.greet = () => {
    console.log('hello');
  };
}

const simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;

  return person;
}

const mike = personFromConstructor('Mike', 30);

// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 7 ***/
PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/*** CHALLENGE 8 ***/

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('hello');
  }
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 9 ***/

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  introduce = function () {
    console.log(`hello world, my name is ${this.name}`);
  };
}

const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// console.log(thai.age); // -> Logs '32'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  }
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = Object.create(userFunctionStore);

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
  const admin = new userFactory(name, score);
  admin.type = 'Admin';

  return admin;
}

/*** CHALLENGE 14 ***/
userFunctionStore.sharePublicMessage = () => {
  console.log('welcome, users');
};

const adminFromFactory = adminFactory('Eva', 5);

// adminFromFactory.sayType(); // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"

/****************************************************************
                        EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  }
};

let robotFido = new Dog();

robotFido = Object.assign(robotFido, robotMixin);

// robotFido.speak(); // -> Logs "I am made of metal"
