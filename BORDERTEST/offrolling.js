const profileRight = document.querySelector(".profile-right");
const topList = document.querySelector(".top-list");
const profileDetails = document.querySelector(".profile-details");

if (profileRight && topList && profileDetails) {
  let timeoutId = null;

  function addImage() {
    const newImage = document.createElement("div");
    newImage.classList.add("silhouettes");
    newImage.innerHTML = `
      <img src="/BORDERTEST/image/logo/video.png" class="person-icon" alt="">
      <p class="xend-score">Tyla seethal</p>
    `;
    profileRight.appendChild(newImage);
  }

  function insertAfterVisibleZone(node) {
    const postZones = document.querySelectorAll(".post-zone");
    let target = null;

    postZones.forEach((postZone) => {
      const rect = postZone.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        target = postZone;
      }
    });

    if (target) {
      target.insertAdjacentElement("afterend", node);
      return;
    }

    profileDetails.appendChild(node);
  }

  function cycleOffrolling() {
    if (!profileRight.firstElementChild) return;
    if (!topList.firstElementChild) return;

    addImage();

    const firstRight = profileRight.firstElementChild;
    topList.appendChild(firstRight.cloneNode(true));
    profileRight.removeChild(firstRight);

    const firstTopImage = topList.querySelector("img");
    if (!firstTopImage) return;

    const newDivContainer = document.createElement("div");
    newDivContainer.classList.add("new-div-container");
    newDivContainer.appendChild(firstTopImage.cloneNode(true));

    topList.removeChild(topList.firstElementChild);
    insertAfterVisibleZone(newDivContainer);
    newDivContainer.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  function handleScroll() {
    const firstChild = profileRight.firstElementChild;
    if (!firstChild) return;

    const firstChildHeight = firstChild.clientHeight || 1;
    const numCycles = Math.floor(profileRight.scrollTop / firstChildHeight);

    for (let i = 0; i < numCycles; i += 1) {
      cycleOffrolling();
    }

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(cycleOffrolling, 300);
  }

  profileRight.addEventListener("scroll", handleScroll);
}
