
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.style.backgroundColor = isDarkMode ? '#000' : '#fff';
});

const toggleIcon = document.getElementById('toggle-icon');
const topList = document.querySelector('.top-list');
const profileRight = document.querySelector('.profile-right');
const profile = document.querySelector('.profile');
const profileContainer= document.querySelector('.profile-container');
const profileLeft = document.querySelector('.profile-left');
const logo = document.querySelector('.hhicon');
const svgIcon = document.querySelector('#Capa_1');
const svg= document.querySelector('svg');
const postZone = document.querySelectorAll('post-zone')


postZone.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    topList.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    profileLeft.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    profile.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    profileContainer.style.backgroundColor = isDarkMode ? '#000' : '#fff';