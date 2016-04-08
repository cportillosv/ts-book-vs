//Callbacks and higher-order functions

var foo = function () // callback
{
    console.log('foo');
}

function bar(cb: () => void) { // higher order function
    console.log('bar');
    cb();
}

bar(foo); //prints 'bar' then prints 'foo'

//Arrow functions
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        alert(`Hi! My name is ${this.name}`);
    }
    greetDelay(time: number) {
        setTimeout(() => {
            alert(`Hi! My name is delay ${this.name}`);
        }, time);
    }
}

var charles = new Person("Charles");
charles.greet();
charles.greetDelay(1000);


var sum = (num1: number, num2: number = 0) => {
    return num1 + num2;
}
console.log(sum(5));