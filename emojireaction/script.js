const happyBtn = document.querySelector('#happy-btn');

happyBtn.addEventListener('click', () => {
    updateCount(happyBtn);
});

function updateCount(buttonEl) {
    const countEl = buttonEl.querySelector('.count');
    let currCount = +countEl.textContent.split('/')[0];
    if (currCount === 10) return;
    currCount++;
    countEl.textContent = `${currCount}/10`;
}
