function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

console.log(getGreeting('Denny'));

function addAndMultiplyBy5(num1, num2) {
  var answer = (num1 + num2) * 5;
  return answer;
}

console.log(addAndMultiplyBy5(10, 5));

function multipleAndDivideBy5(num1, num2) {
  var answer2 = (num1 * num2) / 5;
  return answer2;
}

console.log(multipleAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  var answer3 = num1 - num2;
  return answer3;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  var circumference = 2 * radius * Math.PI;
  return circumference;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

console.log(getFullName('Juan', 'Ramirez'));

function cube(number) {
  var answer4 = number * number * number;
  return answer4;
}

console.log(cube(5));
