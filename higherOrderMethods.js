function higherOrderFunc(funcParam) {
  console.log(funcParam());
}

const multiply = () => 2 * 3;
higherOrderFunc(multiply);
higherOrderFunc(() => 'hello');
higherOrderFunc(() => Math.random());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function higherOrderFunc2(multiplier) {
  return function returnedFunction(value) {
    console.log(multiplier * value);
  };
}

const multiplyBy2 = higherOrderFunc2(2);
const multiplyBy3 = higherOrderFunc2(3);
const multiplyBy4 = higherOrderFunc2(4);
const multiplyBy5 = higherOrderFunc2(5);
multiplyBy2(2);
multiplyBy3(2);
multiplyBy4(2);
multiplyBy5(2);

Array.prototype.ourCustomMethod = function (ourCallback) {
  for (const element of this) {
    ourCallback(element);
  }
};

const myArray = [
  { id: 1, name: 'Jorge' },
  { id: 2, name: 'Alejandra' }
];

const myCallback = elem => console.log(elem);
myArray.ourCustomMethod(myCallback);
