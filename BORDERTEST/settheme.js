const toggleButton = document.getElementById('toggle-button');
const toggleIcon = document.getElementById('toggle-icon');
const postZone = document.getElementsByClassName('post-zone')

console.log(postZone)
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('background-white ');
  
  postZone.classList.toggle('post-zone-white')

  toggleIcon.textContent = document.body.classList.contains('background-white') ? "🌑":"🌟";
});

