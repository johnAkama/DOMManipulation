const developerObj = [
    {
        name: 'Jessica',
        country: 'USA',
        isEmployed: true,
    },
    {
        name: 'Jessica',
        country: 'USA',
        isEmployed: true,
    },
];

/* const testName = 'jessica is a girl';
const testName2 = 'jesSiCA';
const regEx = /jessica/gi;
console.log(regEx.test(testName)); // Reset the lastIndex to search from the beginning
console.log(regEx.lastIndex);
console.log(regEx.test(testName2)); */

/* function validateNumber(input) {
    if (typeof input !== 'number') {
        throw new TypeError('Expected a number, but received ' + typeof input);
    }
    return input * 2;
}

try {
    console.log(validateNumber('5')); // This will wk
} catch (error) {
    console.error('An error occurred' + error.message);
}
 */

/* const start = /^freecodecamp/im;
const end = /freecodecamp$/im;
const string = `I really love
freecodecamp
it's my favorite`;
console.log(start.test(string)); // true
console.log(end.test(string)); // true
 */

/* const regex = /freecodecamp/im;
const string = "we love freecodecamp isn't freecodecamp great?";
console.log(string.match(regex));
 */

/* const regex = /freecodecamp/i;
console.log(regex.test("I love FREECODECAMPINGSEE!"));
console.log(regex.test("freeCodoCamp"));
console.log(regex.test("We went freeCodeCamping.")); */

/* const pattern = 'freecodecamp';
const str = 'freecodecamp is the best we love freecodecamp';
const matched = str.matchAll(pattern);
const replaced = str.replaceAll(pattern, 'freeCodeCamp');
console.log(matched);
console.log(replaced);
console.log(matched.next()); 
console.log(matched.next()); 
console.log(matched.next()); */

//Match any digit between 0 and 9 using the regex \d. The test() method is used to check if the regex matches any part of the string. In this case, it will return true for the string 'The year is 2024' because it contains digits, and false for 'Hello World' because it does not contain any digits.
const regTest = /\d/; //const regTest = /0|1|2|3|4|5|6|7|8|9/
console.log(regTest.test('The year is 2024')); // true
console.log(regTest.test('Hello World')); // false

const regLetters = /\w/; //const regLetters = /[a-zA-Z]/
console.log(regLetters.test('Hello World')); // true
console.log(regLetters.test('12345')); // false
