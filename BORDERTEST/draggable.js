
const story = document.querySelector('.story');

story.addEventListener('mousedown', (e) => {
  e.preventDefault();
  let startX = e.clientX;
  let scrollLeft = story.scrollLeft;

  document.addEventListener('mousemove', (e) => {
    story.scrollLeft = scrollLeft - (e.clientX - startX);
  });

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', null, false);
  });
});
