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