// Define the data for the profile-right container


const rights = [
  { id: 1, imageUrl: "/BORDERTEST/image/emoji/laughing.png", category:'status', 
  link: '/BORDERTEST/recents.html',
  emoji: '🤡' },
  { id: 2, imageUrl: "/BORDERTEST/image/emoji/laughing.png", 
  link: '/BORDERTEST/recents.html',category:'status', emoji: '🤡' },
  { id: 3, imageUrl: "/BORDERTEST/image/emoji/1F600_color.png", link:"/BORDERTEST/video.html",category:'stato',category:'status', emoji: '🤡' },
  { id: 4, imageUrl: "/BORDERTEST/image/1701250539602.jpg", link:"/BORDERTEST/video.html",category:'status', emoji: '🤡' },
  { id: 5, imageUrl: "/BORDERTEST/image/profile-pic/member-3.png", link:"/BORDERTEST/video.html",category:'status', emoji: '🤡' },
  { id: 6, imageUrl: "/BORDERTEST/image/profile-pic/member-4.png",link:"/BORDERTEST/video.html", category:'stato',emoji: '🆒' },
  { id: 7, imageUrl: "/BORDERTEST/image/profile-pic/member-5.png", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 8, imageUrl: "/BORDERTEST/image/profile-pic/member-6.png",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 9, imageUrl: "/BORDERTEST/image/profile-pic/member-7.png", link:"/BORDERTEST/video.html",category:'stato',emoji: '🆒' },
  { id: 10, imageUrl: "/BORDERTEST/image/profile-pic/member-8.png", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 11, imageUrl: "/BORDERTEST/image/profile-pic/member-9.png", link:"/BORDERTEST/video.html",category:'stato',emoji: '🆒' },
  { id: 12, imageUrl: "/BORDERTEST/image/profile-pic/eagle 1.jpg", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 13, imageUrl: "/BORDERTEST/image/profile-pic/eagle 2.jpg",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 14, imageUrl: "/BORDERTEST/image/stamps/20240719_202951.png",link:"/BORDERTEST/video.html", category:'stato',emoji: '🆒' },
  { id: 15, imageUrl: "/BORDERTEST/image/stamps/20240719_203236.png",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 16, imageUrl: "/BORDERTEST/image/myimage/1724092747609.jpg",link:"/BORDERTEST/video.html", category:'stato',emoji: '🆒' },
  { id: 17, imageUrl: "/BORDERTEST/image/myimage/1724092750732.jpg",link:"/BORDERTEST/video.html", category:'status',emoji: '🍎' },
  { id: 18, imageUrl: "/BORDERTEST/image/myimage/1724092756542.jpg",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 19, imageUrl: "/BORDERTEST/image/myimage/1724427478725.jpg",link:"/BORDERTEST/video.html", category:'stato',emoji: '🆒' },
  { id: 20, imageUrl: "/BORDERTEST/image/myimage/Screenshot_20240820-091405.jpg", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 21, imageUrl: "/BORDERTEST/image/myimage/IMG-20240822-WA0001.jpg",link:"/BORDERTEST/video.html",category:'status', emoji: '🤡' },
  { id: 22, imageUrl: "/BORDERTEST/image/profile-pic/member-5.png", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 23, imageUrl: "/BORDERTEST/image/myimage/IMG_20240825_131607_729.jpg",link:"/BORDERTEST/video.html", emoji: '🤡' },
  { id: 24, imageUrl: "/BORDERTEST/image/profile-pic/member-7.png", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 25, imageUrl: "/BORDERTEST/image/profile-pic/member-8.png",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 26, imageUrl: "/BORDERTEST/image/profile-pic/member-9.png", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 27, imageUrl: "/BORDERTEST/image/profile-pic/eagle 1.jpg", link:"/BORDERTEST/video.html",category:'status',emoji: '🤡' },
  { id: 28, imageUrl: "/BORDERTEST/image/profile-pic/eagle 2.jpg",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 29, imageUrl: "/BORDERTEST/image/stamps/20240719_202951.png",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' },
  { id: 30, imageUrl: "/BORDERTEST/image/stamps/20240719_203236.png",link:"/BORDERTEST/video.html", category:'status',emoji: '🤡' }
  ,{id: 31, 
  imageUrl: "/BORDERTEST/image/icons/bubble-chat.png", 
  link:"/BORDERTEST/video.html",
  category:"utilities"
  },
  { 
  id: 32, 
    imageUrl: "/BORDERTEST/image/icons/credit-card.png", 
    link:"/BORDERTEST/video.html",
   category:"utilities"
 },
   { 
   id: 33, 
   imageUrl: "/BORDERTEST/image/icons/game-controller.png",
   link:"/BORDERTEST/game3d.html",
   category:"utilities"
   },
    { 
    id: 34, 
    imageUrl: "/BORDERTEST/image/icons/headphones.png",
    link:"/BORDERTEST/video.html",
    category:"utilities"
    },
     { 
     id: 35, 
     imageUrl: "/BORDERTEST/image/icons/home.png",
     link:"/BORDERTEST/page.html",
     category:"utilities"
     },
      {
      id: 36, 
      imageUrl: "/BORDERTEST/image/icons/joystick.png",
      link:"/BORDERTEST/game.html",
      category:"utilities"
      },
       { 
       id: 37, 
       imageUrl: "/BORDERTEST/image/icons/location.png",
       link:"/BORDERTEST/video.html",
       category:"utilities"
       },
        { 
        id: 38, 
        imageUrl: "/BORDERTEST/image/icons/notification.png",
        link: '/BORDERTEST/notify.html',
        category:"utilities"
        },
         { 
         id: 39, 
         imageUrl: "/BORDERTEST/image/icons/phone-call.png",
         link:"/BORDERTEST/call.html",
         category:"utilities"
         },
          { 
          id: 40, 
          imageUrl: "/BORDERTEST/image/logo/f7f59f8a-271a-48ed-ba68-edde2488a483.png",
          link:"/BORDERTEST/video.html",
         category:"utilities"
          },
           { 
           id: 41, 
         imageUrl: "/BORDERTEST/image/icons/shopping-store.png",
         link:"/BORDERTEST/video.html",
           category:"utilities"
           },
            { 
            id: 42, 
            imageUrl: "/BORDERTEST/image/icons/telephone.png",
            link:"/BORDERTEST/video.html",
            category:"utilities"
 },
             { 
             id: 43, 
             imageUrl: "/BORDERTEST/image/icons/television.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,   {
                     id: 44,
                     imageUrl: "/BORDERTEST/image/icons/shopping-cart.png",
                     link: "/BORDERTEST/cart.html",
                     category:"utilities"
                   },
                       { 
             id: 45, 
             imageUrl: "/BORDERTEST/image/icons/mic.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,      { 
             id: 46, 
             imageUrl: "/BORDERTEST/image/icons/chat-bubble.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,      { 
             id: 47, 
             imageUrl: "/BORDERTEST/image/icons/conference.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,  
                    { 
             id: 48, 
             imageUrl: "/BORDERTEST/image/icons/settings.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,      { 
             id: 49, 
             imageUrl: "/BORDERTEST/image/icons/twitch.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,      { 
             id: 50, 
             imageUrl: "/BORDERTEST/image/icons/user.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,      { 
             id: 51, 
             imageUrl: "/BORDERTEST/image/icons/information-point.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,      { 
             id: 52, 
             imageUrl: "/BORDERTEST/image/icons/chatgpt.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,  
                 { 
             id: 53, 
             imageUrl: "/BORDERTEST/image/icons/ai.png",
             link:"/BORDERTEST/video.html",
             category:"utilities"
             }
                ,  
                {
                id: 54, 
  imageUrl: "/BORDERTEST/image/icons/bank.png", 
  link:"/BORDERTEST/video.html",
  category:"utilities",
                }
                 ,      { 
             id: 60, 
             imageUrl: "/BORDERTEST/image/apps/airbnb-pink-app-logo-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 61, 
             imageUrl: "/BORDERTEST/image/apps/airtable-app-logo-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 62, 
             imageUrl: "/BORDERTEST/image/apps/blue-app-logo-design-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                 { 
             id: 63, 
             imageUrl: "/BORDERTEST/image/apps/Blue-app-logo-headway-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                {
                id: 64, 
  imageUrl: "/BORDERTEST/image/apps/blue-app-logo-twitter-600x600.jpg", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                }
                 ,      { 
             id: 65, 
             imageUrl: "/BORDERTEST/image/apps/cash-app-logo-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 67, 
             imageUrl: "/BORDERTEST/image/apps/cash-app-logo-example-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 68, 
             imageUrl: "/BORDERTEST/image/apps/cash-app-logo-example-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                 { 
             id: 69, 
             imageUrl: "/BORDERTEST/image/apps/darkroom-pink-app-logo-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                {
                id: 70, 
  imageUrl: "/BORDERTEST/image/apps/dating-app-logo-example-600x600.jpg", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                }
                 ,      { 
             id: 71, 
             imageUrl: "/BORDERTEST/image/apps/dating-app-logo-tinder-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 72, 
             imageUrl: "/BORDERTEST/image/apps/discord-blue-app-logo-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 73, 
             imageUrl: "/BORDERTEST/image/apps/drop-money-app-logo-design-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                 { 
             id: 74, 
             imageUrl: "/BORDERTEST/image/apps/flo-pink-app-logo-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                {
                id: 75, 
  imageUrl: "/BORDERTEST/image/apps/goodreds-app-logo-600x600.jpg", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                }
                  ,  
                {
                id: 76, 
  imageUrl: "/BORDERTEST/image/apps/gradient-social-media-app-logo-example-600x600.jpg", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                }
                 ,      { 
             id: 77, 
             imageUrl: "/BORDERTEST/image/apps/gradient-social-media-app-logo-example-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 78, 
             imageUrl: "/BORDERTEST/image/apps/green-app-logo-alltrails-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 79, 
             imageUrl: "/BORDERTEST/image/apps/green-app-logo-duolingo-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                 { 
             id: 80, 
             imageUrl: "/BORDERTEST/image/apps/headspace-app-logo-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                {
                id: 81, 
  imageUrl: "/BORDERTEST/image/apps/Koho-money-app-logo-600x600.png", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                }
                  ,  
                {
                id: 82, 
  imageUrl: "/BORDERTEST/image/apps/linkedin-blue-app-logo-600x600.jpg", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                }
                 ,      { 
             id: 83, 
             imageUrl: "/BORDERTEST/image/apps/monogram-app-logo-design-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 84, 
             imageUrl: "/BORDERTEST/image/apps/monopoly-app-logo-design-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,      { 
             id: 85, 
             imageUrl: "/BORDERTEST/image/apps/pink-app-logo-design-600x600.jpg",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                 { 
             id: 86, 
             imageUrl: "/BORDERTEST/image/apps/pink-app-logo-iam-600x600.png",
             link:"/BORDERTEST/video.html",
             category:"apps"
             }
                ,  
                {
                id: 87, 
  imageUrl: "/BORDERTEST/image/apps/pizza-app-logo-design-example-600x600.jpg", 
  link:"/BORDERTEST/video.html",
  category:"apps"
                },
                 {
   id: 88 ,
   imageUrl: "/BORDERTEST/image/emoji/1F923_color.png",
   link: "",
   category: "apps"
 },
{
  id:89 ,
  imageUrl: "/BORDERTEST/image/emoji/1F929_color.png",
  link: "",
  category: "apps"
},
{
  id:90 ,
  imageUrl: "/BORDERTEST/image/emoji/1F970_color.png",
  link: "",
  category: "apps"
},
{
  id:91 ,
  imageUrl: "/BORDERTEST/image/emoji/1FAE0_color.png",
  link: "",
  category: "apps"
},
{
  id:92 ,
  imageUrl: "/BORDERTEST/image/emoji/1FAE0_color.png",
  link: "",
  category: "apps"
},
{
  id: 93,
  imageUrl: "/BORDERTEST/image/emoji/E008_color.png",
  link: "",
  category: "apps"
},
{
  id: 94 ,
  imageUrl: "/BORDERTEST/image/emoji/E009_color.png",
  link: "",
  category: "apps"
},
{
  id: 95,
  imageUrl: "/BORDERTEST/image/emoji/E047_color.png",
  link: "",
  category: "apps"
},
{
  id: 96 ,
  imageUrl: "/BORDERTEST/image/emoji/E047_color.png",
  link: "",
  category: "apps"
}
];

window.onload = function() {
  filterContent('status');
}

/*function edge() {
    edge.style.display='';
    edgeChild.style.display='';
}
edge();
*/

function filterContent(category) {
  const filteredRights = rights.filter((right) => right.category === category);
  const html = filteredRights.map((right) => `
    <div class="silhouettes icon-entity">
      ${right.link ? `<a href='${right.link}'>` : ''}
        <img src='${right.imageUrl || ''}'>
      ${right.link ? `</a>` : ''}
      ${right.emoji ? `<p>${right.emoji}</p>` : ''}
    </div>
  `).join('');
  rightContainer.innerHTML = html;
}
// Select the profile-right container
const rightContainer = document.querySelector('.profile-right');
const aiContainer= document.querySelector('.select-A');
const background= document.querySelector('#theme');

const edge = document.querySelector('.EDGE');
const selectAi = document.querySelector('.select-ai')

const postZone = document.querySelector('.post-zone')
aiContainer.addEventListener('click', () => {
  selectAi.classList.toggle('show')
  
});

background.addEventListener('click', () => {
  postZone.classList.toggle('black')
  
});

const filterStatusButton = document.getElementById('filter-status');
const filterStatoButton = document.getElementById('filter-stato');
const filterAppsButton = document.getElementById('filter-apps');

const filterUtilitiesButton = document.getElementById('filter-utilities');




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

// function to filter content

/*function filterContent(category) {
  const filteredRights = rights.filter((right) => right.category === category);
  const html = filteredRights.map((right) => `
    <div class="silhouettes icon-entity">
    <a href='${right.link}'>
        <img src='${right.imageUrl}'>
              </a>
        <p>${right.emoji}</p>

    </div>
  `).join('');
  rightContainer.innerHTML = html;
}*/
/*
function filterContent(category) {
  const filteredRights = rightsU.filter((right) => right.category === category);
  const html = filteredRights.map((right) => `
  <div class="silhouettes icon-entity">
<a href='${right.link}'>
    <img src="${right.imageUrl}" alt="">
  </a>
  </div>
  `).join('');
  rightContainer.innerHTML = html;
}
*/
// add event listeners to buttons

/*
function filterContent(category) {
  const filteredRights = rights.filter((right) => right.category === category);
  const html = filteredRights.map((right) => `
    <div class="silhouettes icon-entity">
      ${right.link ? `<a href='${right.link}'>` : ''}
        <img src='${right.imageUrl}'>
      ${right.link ? `</a>` : ''}
      <p>${right.emoji}</p>
    </div>
  `).join('');
  rightContainer.innerHTML = html;
}

*/


// Populate the profile-right container with HTML
/*bb
rightContainer.innerHTML = rights.map(right => `

  <div class="silhouettes">
  <a href='/BORDERTEST/recents.html'>
    <img src='${right.imageUrl}'>
    <p>${right.emoji}</p>
      </a>
  </div>

`).join('');
*/

// Select the profile-right container


// Populate the profile-right container with HTML
/*aa
rightContainer.innerHTML = rights
  .filter((right) => right.category === 'stato')
  .map((right) => `
    <div class="silhouettes">
      <a href='/BORDERTEST/recents.html'>
        <img src='${right.imageUrl}'>
        <p>${right.emoji}</p>
      </a>
    </div>
  `)
  .join('');
  
  */

/*
  <img src="/BORDERTEST/image/logo/video.png" class='person-icon' alt="">
    <p class='xend-score'>Tyla seethal</p>
    */
    /*
    // Define the data for the profile-right container
const videos = [
  { id: 1, imageUrl: "./videos /bleacharc_20240807_10.mp4", emoji: '🤡' },
  { id: 2, imageUrl: "./videos /alexandru_edit_20240808_3.mp4", emoji: '🤡' },
  { id: 3, imageUrl: "./videos /deathbattlebrazil_20240808_4.mp4", emoji: '🤡' },
  { id: 4, imageUrl: "/BORDERTEST/image/1701250539602.jpg", emoji: '🤡' },
  { id: 5, imageUrl: "/BORDERTEST/image/profile-pic/member-3.png", emoji: '🤡' },
  { id: 6, imageUrl: "/BORDERTEST/image/profile-pic/member-4.png", emoji: '🤡' },
  { id: 7, imageUrl: "/BORDERTEST/image/profile-pic/member-5.png", emoji: '🤡' },
  { id: 8, imageUrl: "/BORDERTEST/image/profile-pic/member-6.png", emoji: '🤡' },
  { id: 9, imageUrl: "/BORDERTEST/image/profile-pic/member-7.png", emoji: '🤡' },
  { id: 10, imageUrl: "/BORDERTEST/image/profile-pic/member-8.png", emoji: '🤡' },
  { id: 11, imageUrl: "/BORDERTEST/image/profile-pic/member-9.png", emoji: '🤡' },
  { id: 12, imageUrl: "/BORDERTEST/image/profile-pic/eagle 1.jpg", emoji: '🤡' },
  { id: 13, imageUrl: "/BORDERTEST/image/profile-pic/eagle 2.jpg", emoji: '🤡' },
  { id: 14, imageUrl: "/BORDERTEST/image/stamps/20240719_202951.png", emoji: '🤡' },
  { id: 15, imageUrl: "/BORDERTEST/image/stamps/20240719_203236.png", emoji: '🤡' },
  { id: 16, imageUrl: "/BORDERTEST/image/myimage/1724092747609.jpg", emoji: '🤡' },
  { id: 17, imageUrl: "/BORDERTEST/image/myimage/1724092750732.jpg", emoji: '🍎' },
  { id: 18, imageUrl: "/BORDERTEST/image/myimage/1724092756542.jpg", emoji: '🤡' },
  { id: 19, imageUrl: "/BORDERTEST/image/myimage/1724427478725.jpg", emoji: '🤡' },
  { id: 20, imageUrl: "/BORDERTEST/image/myimage/Screenshot_20240820-091405.jpg", emoji: '🤡' },
  { id: 21, imageUrl: "/BORDERTEST/image/myimage/IMG-20240822-WA0001.jpg", emoji: '🤡' },
  { id: 22, imageUrl: "/BORDERTEST/image/profile-pic/member-5.png", emoji: '🤡' },
  { id: 23, imageUrl: "/BORDERTEST/image/myimage/IMG_20240825_131607_729.jpg", emoji: '🤡' },
  { id: 9, imageUrl: "/BORDERTEST/image/profile-pic/member-7.png", emoji: '🤡' },
  { id: 10, imageUrl: "/BORDERTEST/image/profile-pic/member-8.png", emoji: '🤡' },
  { id: 11, imageUrl: "/BORDERTEST/image/profile-pic/member-9.png", emoji: '🤡' },
  { id: 12, imageUrl: "/BORDERTEST/image/profile-pic/eagle 1.jpg", emoji: '🤡' },
  { id: 13, imageUrl: "/BORDERTEST/image/profile-pic/eagle 2.jpg", emoji: '🤡' },
  { id: 14, imageUrl: "/BORDERTEST/image/stamps/20240719_202951.png", emoji: '🤡' },
  { id: 15, imageUrl: "/BORDERTEST/image/stamps/20240719_203236.png", emoji: '🤡' },
];

// Select the profile-right container
const videoContainer = document.querySelector('.profile-right');

// Populate the profile-right container with HTML
videoContainer.innerHTML = videos.map(video => `
  <div class="silhouettes">
    <video src='${video.imageUrl}' controls autoplay>
    <p>${video.emoji}</p>
  </div>
`).join('');
*/