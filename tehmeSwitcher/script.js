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

const btnSwitch = document.getElementById('theme-switcher-button');
const menuPan = document.querySelector(
    '[aria-labelledby="theme-switcher-button"]',
);

btnSwitch.addEventListener('click', () => {
    menuPan.hidden = !menuPan.hidden;
    btnSwitch.setAttribute('aria-expanded', !menuPan.hidden);
});

document
    .querySelectorAll('[aria-labelledby="theme-switcher-button"] li')
    .forEach((liItem) => {
        liItem.addEventListener('click', () => {
            const themeColor = liItem.textContent.trim();
            const themeName = 'theme-' + themeColor;

            // Remove all theme classes before adding new one
            document.body.classList.remove(
                ...themes.map((t) => 'theme-' + t.name),
            );
            document.body.classList.add(themeName);

            const theme = themes.find((t) => t.name === themeColor);
            if (theme) {
                document.querySelector('[aria-live="polite"]').textContent =
                    theme.message;
            }

            menuPan.hidden = true;
            btnSwitch.setAttribute('aria-expanded', 'false');
        });
    });
