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

const testName = 'Jessica';
const regEx = /Jessica/;
console.log(regEx.test(testName));

/* function validateNumber(input) {
    if (typeof input !== 'number') {
        throw new TypeError('Expected a number, but received ' + typeof input);
    }
    return input * 2;
}

try {
    console.log(validateNumber('5')); // This will work
} catch (error) {
    console.error('An error occurred' + error.message);
}
 */
