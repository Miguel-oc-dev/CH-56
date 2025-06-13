function Person(p1, p2) {
    this.forename = p1
    this.surname = p2
    this.fullName = function () {
        return this.forename + " " + this.surname
    }
}

// Person 1
let personOne = new Person("Kasim", "Chaudry")

// Person 2
let personTwo = new Person("Eva", "Malinova")

// Person 3
let personThree = new Person("Miguel", "Contreras")

console.log(personThree);
console.log(personThree.fullName());

// Person 4
const personFour = new Person("Ivan", "Hernandez");
console.log(personFour.fullName());
