// let person = {}//Object literals
let person = {
    name: 'John',
    age: 30
}
person.name = 'Billard';
person['age'] = 33;
let selection = 'name';
person[selection] = 'Brown'
console.log(person);