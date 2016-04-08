//Callbacks and higher-order functions
var foo = function () {
    console.log('foo');
};
function bar(cb) {
    console.log('bar');
    cb();
}
bar(foo); //prints 'bar' then prints 'foo'
//Arrow functions
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        alert("Hi! My name is " + this.name);
    };
    Person.prototype.greetDelay = function (time) {
        var _this = this;
        setTimeout(function () {
            alert("Hi! My name is delay " + _this.name);
        }, time);
    };
    return Person;
}());
var charles = new Person("Charles");
charles.greet();
charles.greetDelay(1000);
var sum = function (num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
console.log(sum(5));
//# sourceMappingURL=asynchronous.js.map