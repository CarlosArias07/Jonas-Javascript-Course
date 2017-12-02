/*var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);*/

/*var name = 'John';
var age = 26;

console.log(name + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(name + ' ' + job)

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' ' + age + ' ' + job + ' ' + isMarried);*/

/*var birthYear = 2016 - 26;
var por = 20%20;
console.log(por);*/

/*var name = 'John';
var age = 26;
var isMarried = false;

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

//== does type coertion
//=== does not! <- use this one
*/

/*var job = 'Teacher';

job = prompt('What does John do?');

switch (job) {
    case 'Teacher':
        console.log('John teaches');
        break;
    case 'Driver':
        console.log('John drives');
        break;
    case 'Cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}*/

/*var jHeight = 175;
var jAge = 50;

var aHeight = 175;
var aAge = 50;

var mHeight = 175;
var mAge = 50;

var jScore = jHeight + (jAge *= 5);
var aScore = aHeight + (aAge *= 5);
var mScore = mHeight + (mAge *= 5);

if (jScore > aScore && jScore > mScore) {
    console.log('John is the winner, total score: ' + jScore + ' / Alex score: ' + aScore + ' / Mike score: ' + mScore);
}
else if (aScore > jScore && aScore > mScore) {
    console.log('Alex is the winner, total score: ' + aScore + '/ John score: ' +jScore + ' / Mike score: ' + mScore);
}
else if (mScore > jScore && mScore > aScore) {
    console.log('Mike is the winner, total score: ' + mScore + '/ John score: ' +jScore + ' / Alex score: ' + aScore);
}
else {
    console.log('Draw, John score: ' + jScore + ' Alex score: ' + aScore + ' Mike score: ' + mScore);
}*/


/*function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >=0) {
        console.log(name + ' retires in ' + retirement + ' years');
    } else {
        console.log(name + ' is alreay retired ');
    }
    
}

yearsUntilRetirement('John', 1940);
yearsUntilRetirement('Mike', 1969);*/

/*var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}*/

/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.name);
console.log(john['lastName']);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;*/

/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);*/

/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 0; i <= 5 ; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 0; i <= 5 ; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);   
}
*/

//CODING CHALLENGE 2
/*
var yearsOfBirth = [1975, 1988, 1993, 1998, 2007];

var ages = [];

for (var i = 0; i < yearsOfBirth.length; i++) {
    ages[i] = 2017 - yearsOfBirth[i];
}

for (var i = 0; i < ages.length; i++) {

    if (ages[i] >= 18) {
        console.log(ages[i]);
    }
}*/

function printFullAge(yearsOfBirth) {
    var ages = [];

    for (var i = 0; i < yearsOfBirth.length; i++) {
        ages[i] = 2017 - yearsOfBirth[i];
    }

    var isFullAge = [];
    
    for (var i = 0; i < ages.length; i++) {
    
        if (ages[i] >= 18) {
            isFullAge.push(true);
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age');
        } else {
            isFullAge.push(false);
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age');
        }
    }

    return isFullAge;
}

var yearsOfBirth1 = [1975, 1988, 1993, 1998, 2007];
var yearsOfBirth2 = [2012, 1992, 2000, 1998, 1975];

var full_1 = [printFullAge(yearsOfBirth1)];
var full_2 = [printFullAge(yearsOfBirth2)];

console.log(full_1);
console.log(full_2);