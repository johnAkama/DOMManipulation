const themes = [
    {
        name: 'dark',
        message: 'dark theme activated',
    },
    {
        name: 'light',
        message: 'light-theme activated',
    },
];

const btnSwtich = document.getElementById('theme-switcher-button');
const menuPan = document.querySelector(
    '[aria-labelledby="theme-switcher-button"]',
);

btnSwtich.addEventListener('click', () => {
    menuPan.hidden === true
        ? (menuPan.hidden = false)
        : (menuPan.hidden = true);

    btnSwtich.setAttribute('aria-expanded', !menuPan.hidden);
});

document
    .querySelectorAll('[aria-labelledby="theme-switcher-button"] li')
    .forEach((liItem) => {
        liItem.addEventListener('click', () => {
            const themeColor = liItem.innerHTML;
            let themeName = 'theme-' + themeColor;
            console.log(themeName);
            document.body.classList.add(themeName);
            document.querySelector('[aria-live="polite"]').innerHTML =
                themes.find((object) => object.name === themeColor).message;
        });
    });
