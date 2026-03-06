// Select the top-list container
const topContainer = document.querySelector('.top-list');

 isUser = false
 // Define the data for the top-list container
const tops = [
  { id: 1,
    imageUrl:"/BORDERTEST/image/stamps/20240719_202250.png",
    emoji: '🤡'
    
  },
  { id: 2,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png",
    emoji: '🤡'
    
  },
  { id: 3,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png",
    emoji: '🤡'
    
  },
  { id: 4,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png",
    emoji: '🤡'
    
  },
  { id: 5,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png",
    emoji: '🤡'
    
  },
  { id: 6,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png",
    emoji: '🤡'
    
  },
 
];


if (tops.length < 0) {
  `
<div class='img-contain'>
 <img src="/BORDERTEST/image/profile-pic/eagle 1.jpg" class='person-icon'alt="">
   <p>${top.emoji}</p>
 </div>


`
} else {
  topContainer.innerHTML = tops.map(top => `
<div class='img-contain'>
 <img src="${top.imageUrl}" class='person-icon'alt="">
   <p>${top.emoji}</p>
 </div>

`).join('');
}


/*

function filterContent(category) {
  const filteredTops = tops.filter((top) => top.category === category);
  const html = filteredTops.map((top) => `
    <div class="img-contain">
      
        <img src='${top.imageUrl || ''}' class='person-icon'>
      
      ${top.emoji ? `<p>${top.emoji}</p>` : ''}
    </div>
   
  `).join('');
  topContainer.innerHTML = html;
}
// Select the profile-right container

const aiContainer = document.querySelector('.select-A');
const edge = document.querySelector('.EDGE');
const selectAi = document.querySelector('.select-ai')
const filterStatusButton = document.getElementById('filter-status');
const filterStatoButton = document.getElementById('filter-stato');
const filterAppsButton = document.getElementById('filter-apps');

const filterUtilitiesButton = document.getElementById('filter-utilities');


aiContainer.addEventListener('click', () => {
  selectAi.classList.toggle('show')
  e
});

filterStatusButton.addEventListener('click', () => {
  filterContent('status');
});
filterUtilitiesButton.addEventListener('click', () => {
  filterContent('utilities');
});
filterStatoButton.addEventListener('click', () => {
  filterContent('stato');
});
filterAppsButton.addEventListener('click', () => {
  filterContent('apps');
});

window.onload = function() {
  filterContent('status');
}
// Populate the top-list container with HTML

*/