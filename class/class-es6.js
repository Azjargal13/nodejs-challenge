// ES6 class syntax

class Person {
    constructor (firstname, lastname, age) {
        this.firstname = firstname,
        this.lastname = lastname,
        this.age = age
    }

    getFullname(){
        return this.firstname + " " + this.lastname
    }

    static older(person1, person2) {
        return (person1.age >=person2.age ? person1 : person2)
    }
}

const p1 = new Person("hello", "world", 10)
const p2 = new Person("world", "hello", 11)

const old = Person.older(p1, p2)
console.log(p1.getFullname())
console.log(p2.getFullname())
console.log('older person is ', old)


// ES6 class syntax with extend

class PersonWithMiddleName extends Person {
    constructor(firstname, middlename, lastname, age) {
        super(firstname, lastname, age) 
        this.middlename = middlename
        
    }

    getFullname(){
        return this.firstname + " " + this.middlename + " " + this.lastname
    }

}

const p3 = new PersonWithMiddleName("hello", "Earth", "world", 20)
console.log(p3.getFullname())