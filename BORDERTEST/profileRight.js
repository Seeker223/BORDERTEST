// Define the data for the profile-right container
const rights = [
  { id: 1, imageUrl: "5642113", emoji: '🤡' },
  { id: 2, 
    imageUrl: "/BORDERTEST/image/1701250525327.jpg", 
    emoji: '🤡 ,'
 ,  link: "./msg.html"
 },
   { id: 3, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
    { id: 4, imageUrl: "/BORDERTEST/image/1701250539602.jpg", emoji: '🤡' },
     { id: 5, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
      { id: 6, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
       { id: 7, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
        { id: 8, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
         { id: 9, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
          { id: 10, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
           { id: 11, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
            { id: 12, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' },
             { id: 13, imageUrl: "/BORDERTEST/image/profile-pic/member-2.png", emoji: '🤡' }
];

// Select the profile-right container
const rightContainer = document.querySelector('.profile-right');

// Populate the profile-right container with HTML
rightContainer.innerHTML = rights.map(right => `
  <a href='${right.link}'>
  <div class="silhouettes">

    <img src="${right.imageUrl}" alt="">

    <p>${right.emoji}</p>
  </div>
    </a>
`).join('');