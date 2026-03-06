// Your JavaScript code here

// Example using map
const container = document.getElementsByClassName('viewpost-container')[0];
const posts = [
  {
    id: 1,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    imageUrl: "./image/profile-pic/member-5.png",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
  },

  {
    id: 2,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    imageUrl: "./image/profile-pic/member-5.png",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
    },
  {
    id: 3,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    imageUrl: "./image/post-pics/1706909281688.jpg",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
    },
  {
    id: 4,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    imageUrl: "./image/post-pics/1706909281688.jpg",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
    },
  {
    id: 5,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    imageUrl: "./image/post-pics/1706909281688.jpg",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, ',
    emoji: 27,
    follow: 7,
    }
];


// Using map to create an array of HTML strings
const htmlArray = posts.map(post => ` 
    <fieldset>
     <legend>${post.happi}</legend>
    <div class="post-zone">
      <div class="group-name">
        <p>${post.title}</p>
        <p>time:${post.time}</p>
      </div> 
      <div class="post-write">
        <p>${post.write}</p>
      </div>
      <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
      <div class="icon-info">
        <div class="emoji-count">${post.emoji}k</div>
        <div class="follow-count">you and ${post.follow} others</div>
      </div>
      <div class="icons">
        <img src="/BORDERTEST/image/logo/thumbs-up.png" alt="">
        <img src="/BORDERTEST/image/logo/msgg.png" alt="">
        <img src="/BORDERTEST/image/logo/share.png" alt="">
      </div>
    </div>
  </fieldset>
`);

// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');