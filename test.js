const developerObj = [
    {
        name: 'Jessica',
        country: 'USA',
        isEmployed: true,
    },
];

/* developerObj.map((item, index, array) => {
    console.log(
        'This will throw an error because developerObj is nt an array',
    );
});
 */

function validateNumber(input) {
    if (typeof input !== 'number') {
        throw new TypeError('Expected a number, but received ' + typeof input);
    }
    return input * 2;
}
