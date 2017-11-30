// Lecture: Hoisting

/*calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1956);

var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);*/

// Lecture: Scope

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
