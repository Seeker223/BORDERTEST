const isThemeColor = true;
const profileRight = document.querySelector(".profile-right");
const topList = document.querySelector(".top-list");

// Function to add a new image to profile-right
function addImage() {
  const newImage = document.createElement("div");
  newImage.classList.add("silhouettes");
  newImage.innerHTML = `
    <img src="/BORDERTEST/image/profile-pic/member-2.png" alt="">
    <p>😂</p>
  `;
  profileRight.appendChild(newImage);
}

// Function to handle button click
function handleButtonClick() {
  addImage();
  const firstImage = profileRight.firstElementChild;
  topList.appendChild(firstImage.cloneNode(true));
  profileRight.removeChild(firstImage);

  const firstImgTopList = topList.querySelector('img').cloneNode(true);

  // Remove the first img element from top-list
  topList.removeChild(topList.firstElementChild);

  // Create new div container
  const newDivContainer = document.createElement('div');
  newDivContainer.classList.add('new-div-container');
  newDivContainer.appendChild(firstImgTopList);

  // Find the appropriate position to insert the newDivContainer
  const postZones = document.querySelectorAll('.post-zone');
  let insertAfterElement = null;

  // Check if any post-zone is visible in the viewport
  postZones.forEach(postZone => {
    const rect = postZone.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      insertAfterElement = postZone;
    }
  });

  if (!insertAfterElement) {
    // No post-zone is visible, find the most recent visible element
    const elements = document.querySelectorAll('.posto-container, .post-zone');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        insertAfterElement = element;
      }
    });
  }

  // Insert the newDivContainer after the appropriate element
  if (insertAfterElement) {
    // Check if insertAfterElement is a post-zone or a posto-container
    if (insertAfterElement.classList.contains('post-zone')) {
      // If it's a post-zone, append the newDivContainer after it
      insertAfterElement.appendChild(newDivContainer);
    } else {
      // If it's a posto-container, insert the newDivContainer after the last post-zone inside it
      const lastPostZone = insertAfterElement.querySelector('.post-zone:last-child');
      if (lastPostZone) {
        lastPostZone.insertAdjacentElement('afterend', newDivContainer);
      } else {
        // If no post-zone is found inside the posto-container, insert the newDivContainer at the end of it
        insertAfterElement.appendChild(newDivContainer);
      }
    }
  } else {
    // No elements are visible, insert at the end of profile-details
    const profileDetails = document.querySelector('.profile-details');
    profileDetails.appendChild(newDivContainer);
  }

  // Scroll to make the most recent child visible
  newDivContainer.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Function to handle scroll in profile-right
function handleScrollUp() {
  const firstChildHeight = profileRight.firstElementChild.clientHeight;
  const scrollPosition = profileRight.scrollTop;

  if (scrollPosition > firstChildHeight) {
    const numAddButtonCalls = Math.floor(scrollPosition / firstChildHeight);
    for (let i = 0; i < numAddButtonCalls; i++) {
      handleButtonClick();
    }
  }
}

// Event listener for the scroll event on profile-right
profileRight.addEventListener("scroll", handleScrollUp);


