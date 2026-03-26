const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
    let flags = '';
    if (caseInsensitiveFlag.checked) {
        flags += 'i';
    }
    if (globalFlag.checked) {
        flags += 'g';
    }

    if (caseInsensitiveFlag.checked && globalFlag.checked) {
        flags = 'ig';
    }
    return flags;
};

testButton.addEventListener('click', () => {
    const regex = new RegExp(regexPattern.value, getFlags());
    const strVal = stringToTest.textContent;
    const matches = strVal.match(regex);

    if (matches) {
        testResult.innerHTML = `Match found: <span class="highlight">${matches[0]}</span>`;
    } else {
        testResult.innerText = 'No match found.';
    }

    testResult.innerHTML = strVal.replace(regex, (m) => {
        return `<span class="highlight">${m}</span>`;
    });

    /* if (matches) {
        testResult.innerText = matches[0];

        testResult.innerHTML = strVal.replace(regex, (m) => {
            return `<span class="highlight">${m}</span>`;
        });
    } else {
        testResult.innerText = 'no match';
    } */
});
