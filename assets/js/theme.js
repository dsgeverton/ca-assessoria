const toggleSwitch = document.getElementById('toggle-theme');
const body = document.body;

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        console.log('Dark mode enabled');
        body.classList.add('dark-mode');
    }
    else {
        console.log('Dark mode disabled');
        body.classList.remove('dark-mode');
    }    
}