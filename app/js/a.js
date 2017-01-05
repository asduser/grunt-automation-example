const sum = (a,b) => {
    return a + b;
};

class Person {
    
    constructor(name = "Default", age = 100) {
        
        this.name = name;
        this.age = age;
        
    }
    
    getInfo() {
        return `My name is ${this.name}, I am ${this.age}.`;
    }
    
}