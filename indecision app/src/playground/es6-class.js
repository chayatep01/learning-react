//to reuse the component as blueprints.

class Person {
    constructor(name = 'Anonymous',age = 0 ){
        this.name = name
        this.age = age
    }
    getGreet () {
        //return 'Hi ' + this.name + ' !'
        //Also the same result
        return  `Hi ${this.name} !`
    }
    getDetails() {
        return `${this.name} is ${this.age} years old. `
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name , age)
        this.major = major
    }
    hasMajor (){
        return !!this.major
    }
    
    getDetails() {
        let detail = super.getDetails();
        if(this.major){
            detail += `his major : ${this.major}`
        }
        return detail
    }   
}
class Traveler extends Person {
    constructor(name,age,country){
        super(name , age)
        this.country = country
    }
    visitedCountry (){
        return !!this.country
    }
    
    getDetails() {
        let detail = super.getDetails();
        if(this.country){
            detail += `He'd like to visit ${this.country}`
        }
        return detail
    }   
}





const me =  new Person('Bright')
console.log(me.getGreet())

const bright  = new Person ('Bright' , 20)
console.log(bright.getDetails())

//These object created form subclass. Which we tried to create the new method and reuse method form ParentClass
const student = new Student('Bright' , 20 ,'IT')
console.log(student.getDetails())

const traveler = new Traveler('Bright' , 20 , 'Singapore')
console.log(traveler.getDetails())

