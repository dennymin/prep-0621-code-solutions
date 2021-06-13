var person = {
  firstName: 'Denny',
  lastName: 'Min',
  hobby: 'Making custom mechanical keyboards'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + '\n' + fullName);
person.job = 'To Learn Code';
console.log("The person's job is: " + '\n' + person.job);
person.previousJob = 'Customer Service Representative';
console.log("The person's previous job was: " + '\n' + person.previousJob);
console.log(person);
