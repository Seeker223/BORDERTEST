//Define the data for the profile-right container
const rights = [
  { 
  id: 1, 
  imageUrl: "/BORDERTEST/image/icons/bubble-chat.png", 
  },
  { 
  id: 2, 
    imageUrl: "/BORDERTEST/image/icons/credit-card.png", 
 },
   { 
   id: 3, 
   imageUrl: "/BORDERTEST/image/icons/game-controller.png"
   },
    { 
    id: 4, 
    imageUrl: "/BORDERTEST/image/icons/headphones.png"
    },
     { 
     id: 5, 
     imageUrl: "/BORDERTEST/image/icons/home.png",
     link:"/BORDERTEST/page.html"
     },
      {
      id: 6, 
      imageUrl: "/BORDERTEST/image/icons/joystick.png",
      link:"/BORDERTEST/game.html"
      },
       { 
       id: 7, 
       imageUrl: "/BORDERTEST/image/icons/location.png"
       },
        { 
        id: 8, 
        imageUrl: "/BORDERTEST/image/icons/notification.png",
        link: '/BORDERTEST/notify.html'
        },
         { 
         id: 9, 
         imageUrl: "/BORDERTEST/image/icons/phone-call.png",
         link:"/BORDERTEST/call.html"
         },
          { 
          id: 10, 
          imageUrl: "/BORDERTEST/image/logo/f7f59f8a-271a-48ed-ba68-edde2488a483.png"
          },
           { 
           id: 11, 
           imageUrl: "/BORDERTEST/image/icons/shopping-store.png"
           },
            { 
            id: 12, 
            imageUrl: "/BORDERTEST/image/icons/telephone.png" },
             { 
             id: 13, 
             imageUrl: "/BORDERTEST/image/icons/television.png",
             link:"/BORDERTEST/video.html"
             }
                ,   {
                     id: 14,
                     imageUrl: "/BORDERTEST/image/icons/shopping-cart.png",
                     link: "/BORDERTEST/cart.html"
                   },
                       { 
             id: 15, 
             imageUrl: "/BORDERTEST/image/icons/mic.png",
             link:"/BORDERTEST/video.html"
             }
                ,      { 
             id: 16, 
             imageUrl: "/BORDERTEST/image/icons/chat-bubble.png",
             link:"/BORDERTEST/video.html"
             }
                ,      { 
             id: 17, 
             imageUrl: "/BORDERTEST/image/icons/conference.png",
             link:"/BORDERTEST/video.html"
             }
                ,  
                    { 
             id: 18, 
             imageUrl: "/BORDERTEST/image/icons/settings.png",
             link:"/BORDERTEST/video.html"
             }
                ,      { 
             id: 19, 
             imageUrl: "/BORDERTEST/image/icons/twitch.png",
             link:"/BORDERTEST/video.html"
             }
                ,      { 
             id: 20, 
             imageUrl: "/BORDERTEST/image/icons/user.png",
             link:"/BORDERTEST/video.html"
             }
                ,      { 
             id: 21, 
             imageUrl: "/BORDERTEST/image/icons/information-point.png",
             link:"/BORDERTEST/video.html"
             }
                ,      { 
             id: 22, 
             imageUrl: "/BORDERTEST/image/icons/chatgpt.png",
             link:"/BORDERTEST/video.html"
             }
                ,  
                 { 
             id: 23, 
             imageUrl: "/BORDERTEST/image/icons/ai.png",
             link:"/BORDERTEST/video.html"
             }
                ,  
                {
                id: 24, 
  imageUrl: "/BORDERTEST/image/icons/bank.png", 
  },
];


// Select the profile-right container
const rightContainer = document.querySelector('.profile-right');

// Populate the profile-right container with HTML
rightContainer.innerHTML = rights.map(right => `
  
  <div class="silhouettes icon-entity">
<a href='${right.link}'>
    <img src="${right.imageUrl}" alt="">
  </a>
  </div>
    
`).join('');