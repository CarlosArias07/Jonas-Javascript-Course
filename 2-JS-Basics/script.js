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

var jHeight = 175;
var jAge = 50;

var aHeight = 179;
var aAge = 32;

var jScore = jHeight + (jAge *= 5);
var aScore = aHeight + (aAge *= 5);

if (jScore > aScore) {
    console.log('John is the winner, total score: ' + jScore + ' / Alex score: ' + aScore);
}
else if (aScore > jScore) {
    console.log('Alex is the winner, total score: ' + aScore + '/ John score: ' +jScore);
}
else {
    console.log('Draw, John score: ' + jScore + ' Alex score: ' + aScore);
}
