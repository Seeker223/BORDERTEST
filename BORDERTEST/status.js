const button = document.querySelector('.status-btn');

const status = document.querySelector('.status-container');
const personR = document.querySelector('.silhouettes');

const personT= document.querySelector('.img-contain');

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

// Example usage:

button.addEventListener('click', () => {
  
  addClass(status, 'inactive');

})
personR.addEventListener('click', () => {
  
  removeClass(status, 'inactive');
 addClass(status, 'active');

})
personT.addEventListener('click', () => {
  
  removeClass(status, 'inactive');

})
personR.addEventListener('click', () => {
  
  console.log('profike right silhouttes')

})
personT.addEventListener('click', () => {
  console.log('profile top')
  

})

console.log(personR)
