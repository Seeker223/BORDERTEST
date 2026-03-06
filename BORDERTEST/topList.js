// Select the top-list container
const topContainer = document.querySelector('.top-list');

 
 // Define the data for the top-list container
const tops = [
  { id: 1,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png"
    
  },
  { id: 2,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png"
    
  },
  { id: 3,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png"
    
  },
  { id: 4,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png"
    
  },
  { id: 5,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png"
    
  },
  { id: 6,
    imageUrl:"/BORDERTEST/image/profile-pic/member-2.png"
    
  },
 
];

// Populate the top-list container with HTML
topContainer.innerHTML = tops.map(top => `
 <img src="${top.imageUrl}" class='person-icon' alt="">
`).join('');