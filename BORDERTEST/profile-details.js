
const container = document.getElementsByClassName('profile-container')[0];

 
 // Define the data for the top-list container


const posts = [
  {
    id: 1,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    name: 'ztsambad',
    postpic: './image/myimage/IMG_20240825_131607_729.jpg',
    imageUrl: "./image/profile-pic/member-5.png",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
  
  },
  
    
];



// Using map to create an array of HTML strings
const htmlArray = Array.from(posts).map(post => ` 

    <fieldset >
     <legend></legend>
    <div class="post-zone">
  
      <div class="group-name">
        
        <p>${post.title}</p>
        <p>time:${post.time}</p>
      </div> 
      <div class="post-upp">
      <div class="post-pic">
      <img src="${post.postpic}" alt="">
      </div> 
      <div class="poster-name">
      <p>
      ${post.name}
      </p>
      </div>
      </div>
      <div class="post-write">
      <textarea name="" id="" cols="40" rows="10">${post.write}</textarea>
        
      </div>
      <div class='box-img'>
      <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
            <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
            <div class="post-img">
              <img src="${post.imageUrl}" alt="">
            </div>
                  <div class="post-img">
                    <img src="${post.imageUrl}" alt="">
                  </div>
      </div>
      <div class="icon-info">
        <div class="emoji-count">${post.emoji}k</div>
        <div class="follow-count">you and ${post.follow} others</div>
      </div>
   <div class="icons conss">
<i class="far fa-thumbs-up" style='font-size:27px; color:gray;'></i>
<i class="fa-sharp fa-regular fa-comment-dots" style='font-size:27px; color:gray;'></i>
 <i class = "fa-solid fa-phone" > </i>
        <p class='resend'>re-xend</p>
      </div>
    </div>
  
  </fieldset>

  
`);


// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');
