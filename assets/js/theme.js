const toggleSwitch = document.getElementById('toggle-theme');
const body = document.body;

toggleSwitch.addEventListener('change', switchTheme, false);

window.addEventListener('load', function () {
    const theme = this.localStorage.getItem('theme');
    if (theme === 'dark') {
        darkMode();
        toggleSwitch.checked = true;
    }
})

function switchTheme(e) {
    if (e.target.checked) {
        darkMode();
    }
    else {
        lightMode();
    }
}

const darkMode = () => {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

const lightMode = () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}