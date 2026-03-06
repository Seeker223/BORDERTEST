let user = true
       // Select the top-list container
const profileDetails = document.querySelector('.profile-details');

 
 // Define the data for the top-list container
const details = [
  {
id: 1,
imageUrl: "image/star.jpg",
h:"BADUN OLUWATOBI",
likes:256,
follower: 20,
para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime pariatur voluptas veritatis tempora saepe fuga quidem illo reiciendis. Esse, officiis?"

}
];

// Populate the top-list container with HTML
if (user == true) {
  `
 <div class="person-img">
   <h1>no post</h1>
 </div>
       <button>likes</button>
       
`
} else {
  detailContainer.innerHTML = details.map(detail => `
 <div class="person-img">
    <img src=${detail.imageUrl} alt="">
       </div>
       
       <h2>${detail.h}</h2>
       <div class="follow-like">
         <div class="likes">
           <p>${detail.lkes}k</p>likes
         </div>
         <div class="followers">
           <p>${detail.follower}M</p>followers 
         </div> 
       </div>
       <div class="info">
         <p>${detail.para}</p>
       </div>
       <button>likes</button>
       
`).join('');
}
