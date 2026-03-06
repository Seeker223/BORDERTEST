// Select the top-list container
const videotopContainer = document.querySelector('.top-list');

 
 // Define the data for the top-list container
const videotops = [
  { id: 1,
    imageUrl:"./videos /thisismikeo_20240807_1.mp4"
    
  },
  { id: 2,
    imageUrl:"./videos /thisismikeo_20240807_1.mp4"
    
  },
  { id: 3,
    imageUrl:"./videos /thisismikeo_20240807_1.mp4"
    
  },
  { id: 4,
    imageUrl:"./videos /thisismikeo_20240807_1.mp4"
    
  },
  { id: 5,
    imageUrl:"./videos /thisismikeo_20240807_1.mp4"
    
  },
  { id: 6,
    imageUrl:"./videos /thisismikeo_20240807_1.mp4"
    
  },
 
];

// Populate the top-list container with HTML
videotopContainer.innerHTML = videotops.map(videotop => `
<div class='img-contain'>
 <video src="${videotop.imageUrl}" alt="" controls autoplay>
</div>
`).join('');