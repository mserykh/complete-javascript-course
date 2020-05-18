/********************************
* Varibles and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 30;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';

// Variable naming rules

var $3years = 3;
var function = 34;
*/

/********************************
* Varible mutation and type coercion
*/
/*
var firstName = 'John';
var age = 30;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he marries? ' + isMarried);

// Variable mutation
age = 'thirty';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he marries? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(lastName);
*/

/****************************************
 * Basic Operators
 */
/*
var currentYear, yearJohn, yearMark, ageJohn, ageMark;
currentYear = 2020;
ageJohn = 30;
ageMark = 35;

// Math operators
yearJohn = currentYear - 30;
yearMark = currentYear - 35;
console.log(yearJohn);

console.log(currentYear + 2);
console.log(currentYear /12 );
console.log(currentYear * 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operatos
console.log(typeof johnOlder);
console.log(typeof ageMark);

var x;
console.log(typeof x);
*/

/****************************************
 * Operator Precedence
 */

/*
var currentYear = 2020;
var yearMarie = 1987;
var fullAge = 18;

// Multiple operators
var isFullAge = currentYear - yearMarie >= fullAge; // true
console.log(isFullAge);


// Grouping
var ageMarie = currentYear - yearMarie;
var ageVlad = 34;
var average = (ageMarie + ageVlad) / 2;
console.log(average);

// Multiple assignmens
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x = x + 2;
x += 2;
console.log(x);

x *= 10;
console.log(x);

x = x + 1;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

*/

/****************************************
 * CHALLENGE
 */
/*
 var massMarie, massVlad, heightMarie, heightVlad, bmiMarie, bmiVlad, bmiIsHigher;

massMarie = 63.5;
heightMarie = 1.72;
bmiMarie = massMarie / (heightMarie * heightMarie);
console.log(bmiMarie);

massVlad = 75;
heightVlad = 1.84;
bmiVlad = massVlad / (heightVlad * heightVlad);
console.log(bmiVlad);
bmiIsHigher = bmiVlad > bmiMarie;

console.log('Is Vlad\'s BMI higher than Marie\'s? ' + bmiIsHigher);

*/
/****************************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var massMarie, massVlad, heightMarie, heightVlad, bmiMarie, bmiVlad, bmiIsHigher;

massMarie = 63.5;
heightMarie = 1.72;
bmiMarie = massMarie / (heightMarie * heightMarie);
console.log(bmiMarie);

massVlad = 75;
heightVlad = 1.84;
bmiVlad = massVlad / (heightVlad * heightVlad);
console.log(bmiVlad);

if (bmiVlad > bmiMarie) {
    console.log('Vlad\'s BMI is higher than Marie\'s.');
} else {
    console.log('Vlad\'s BMI is lower than Marie\'s.');
}
*/


/****************************************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/

/****************************************
* The Ternary Operator and Switch Statements
*/

// var firstName = 'Marie';
// var age = 32;

/****************************************
* The Ternary Operator
*/

/* age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/* if (age >= 18) {
    var drink = 'beer';

} else {
    var drink = 'juice';
}
*/

/****************************************
* Switch Statements
*/
/*
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor': 
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver': 
        console.log(firstName + ' drives Uber in Lisbon.');
        break;
    case 'designer': 
        console.log(firstName + ' designs beautiful websites.');
        break;
    default: 
        console.log(firstName + ' does something else.');
}

var firstName = 'John';
var age = 10;
switch (true) {
    case age < 13:
    console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
    default:
    console.log(firstName + ' is a man.');
}
*/

/****************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: underfined, null, 0, '', NaN
// truthy: NOT falsy values
/*
var height;

height = 23;
if(height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined')
}

console.log(height);

// Equality operators

if (height === '23') {
    console.log('The == operator does type coercion');
}
*/
/****************************************
* CHALLENGE 2
*/
/*
var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 103;

var markTeamScore1 = 103;
var markTeamScore2 = 89;
var markTeamScore3 = 120;

var maryTeamScore1 = 73;
var maryTeamScore2 = 134;
var maryTeamScore3 = 105;

var johnTeamTotalScore = johnTeamScore1 + johnTeamScore2 +johnTeamScore3;
var markTeamTotalScore = markTeamScore1 + markTeamScore2 + markTeamScore3;
var maryTeamTotalScore = maryTeamScore1 + maryTeamScore2 + maryTeamScore3;

var johnTeamAverage = johnTeamTotalScore / 3;
console.log(johnTeamAverage);

var markTeamAverage = markTeamTotalScore / 3;
console.log(markTeamAverage);

var maryTeamAverage = maryTeamTotalScore / 3;
console.log(maryTeamAverage);

if (johnTeamAverage > markTeamAverage && johnTeamAverage > maryTeamAverage) {
    console.log('Winner is John\'s Team. Average score is ' + johnTeamAverage);
} else if (maryTeamAverage > markTeamAverage && maryTeamAverage > johnTeamAverage) {
    console.log('Winner is Mary\'s Team. Average score is ' + maryTeamAverage);
} else if (markTeamAverage > johnTeamAverage && markTeamAverage > maryTeamAverage) {
    console.log('Winner is Mark\'s Team. Average score is ' + markTeamAverage);
}
else {
    console.log('It\'s a draw .');
}
*/

/****************************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
} 
 var ageMarie = calculateAge(1987);
var ageMike = calculateAge(1947);
var ageJane = calculateAge(1968);

console.log(ageMarie, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 72 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1987, 'Marie');
yearsUntilRetirement(1986, 'Vlad');
yearsUntilRetirement(1925, 'Rusty');
*/
/****************************************
* Functions Statements and Expressions
*/

// Function Declaration
//function whatDoYouDo(job, firstName) {}

//Function Expression
/* 
const whatDoYouDo = function(job, firstName) {
    let text;
    job = prompt('What do you do?', '');
    firstName = prompt('What is your name', '');
    switch(job) {
        case 'teacher':
            text = firstName + ' teaches kids how to code.';
            break;
        case 'driver': 
            text = firstName + ' drives a can in Lisbon';
            break;
        case 'designer':
            text = firstName + ' designs beautiful websites.';
            break;
        default: 
            text = firstName + ' does something else.' ;
            break;
    }
    document.getElementById("whatDoYouDo").innerHTML = text;
};
*/

/****************************************
* Arrays
*/

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
console.log(names);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
names[names.length] = 'Vlad';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));  //indexOf returns the position, to check if the element is in the array, if not it will return -1

var isDesigner = john.indexOf('designer') === -1 ?
'John is NOT a designer' : 'John Is a designer';
console.log(isDesigner);
*/

/****************************************
* Challenge
*/
/*
const bills = [124, 48, 268];

function tipCalculator(sums) {
    let tips = [];
    let totals =[];
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] < 50) {
            tips.push(sums[i] * .2);
        } else
        if (sums[i] >=50 && sums[i] <200) {
            tips.push(sums[i] * .15);
        } else {
            tips.push(sums[i] * .1);
        }
        totals.push(sums[i] + tips[i]);
    }
        return {tips, totals}; 
        
}


console.log(tipCalculator(bills));


function tipCalc(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return tip = percentage * bill;
}

const bills2 = [124, 48, 268];
let tips2 = [];
for (let i =0; i < bills.length; i++) {
    tips2.push(tipCalc(bills2[i]));
}

console.log(tips2);

let finalValues = [];

for (let i =0; i < bills.length; i++) {
    finalValues.push(bills2[i] + tips2[i]);
}

console.log(finalValues);
*/

/****************************************
* Object and properties
*/
/*
// Object literal

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.family);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);


// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/****************************************
* Objects and Methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1980,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

console.log(john.calcAge(1990));

john.calcAge();
console.log(john);

*/

/****************************************
* Objects and challenge
*/

var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.5,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


var mark = {
    fullName: 'Mark Rondo',
    mass: 150,
    height: 1.5,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


//var highestBmi = function() {
    if (john.calcBmi() > 
    mark.calcBmi()) {
        console.log(john.fullName + ' has the highest BMI');
    } else if (mark.bmi > john.bmi) {
        console.log(mark.fullName + ' has the highest BMI');
    } else {
        console.log(mark.fullName + ' and ' + john.fullName + ' have identical BMI');
       
    }
//};

//highestBmi();
