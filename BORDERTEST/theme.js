const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;



let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    
});
