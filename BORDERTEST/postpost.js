
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
  
  }
    
];


// Using map to create an array of HTML strings
const htmlArray = Array.from(posts).map(post => ` 

    <fieldset>
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
        <svg fill="#000000" height="800px" width="800px" version="1.1" class="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        	 viewBox="0 0 478.2 478.2" xml:space="preserve">
        <g>
        	<path class='like' d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
        		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
        		c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
        		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
        		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
        		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
        		c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
        		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
        		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
        		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
        		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
        		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
        		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
        		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
        		C444.875,295.3,440.675,304.4,431.975,313.4z"/>
        </g>
        </svg>
<svg fill="#000000" height="800px" width="800px" version="1.1" class="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        	 viewBox="0 0 473 473" xml:space="preserve">
        <g>
        	<g>
        		<path class='like' d="M403.581,69.3c-44.7-44.7-104-69.3-167.2-69.3s-122.5,24.6-167.2,69.3c-86.4,86.4-92.4,224.7-14.9,318
        			c-7.6,15.3-19.8,33.1-37.9,42c-8.7,4.3-13.6,13.6-12.1,23.2s8.9,17.1,18.5,18.6c4.5,0.7,10.9,1.4,18.7,1.4
        			c20.9,0,51.7-4.9,83.2-27.6c35.1,18.9,73.5,28.1,111.6,28.1c61.2,0,121.8-23.7,167.4-69.3c44.7-44.7,69.3-104,69.3-167.2
        			S448.281,114,403.581,69.3z M384.481,384.6c-67.5,67.5-172,80.9-254.2,32.6c-5.4-3.2-12.1-2.2-16.4,2.1c-0.4,0.2-0.8,0.5-1.1,0.8
        			c-27.1,21-53.7,25.4-71.3,25.4h-0.1c20.3-14.8,33.1-36.8,40.6-53.9c1.2-2.9,1.4-5.9,0.7-8.7c-0.3-2.7-1.4-5.4-3.3-7.6
        			c-73.2-82.7-69.4-208.7,8.8-286.9c81.7-81.7,214.6-81.7,296.2,0C466.181,170.1,466.181,302.9,384.481,384.6z"/>
        		<circle cx="236.381" cy="236.5" r="16.6"/>
        		<circle cx="321.981" cy="236.5" r="16.6"/>
        		<circle cx="150.781" cy="236.5" r="16.6"/>
        	</g>
        </g>
        </svg>
<svg fill="#000000" height="800px" width="800px" version="1.1" class="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        	 viewBox="0 0 481.6 481.6" xml:space="preserve">
        <g>
        	<path class="like" d="M381.6,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8
        		c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S429,0,381.5,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5
        		l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8c-47.4,0-86.1,38.6-86.1,86.1s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9
        		l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1s86.1-38.6,86.1-86.1S429.1,309.4,381.6,309.4z M381.6,27.1
        		c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S349.1,27.1,381.6,27.1z M100,299.8
        		c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S132.5,299.8,100,299.8z M381.6,454.5
        		c-32.6,0-59.1-26.5-59.1-59.1c0-32.6,26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1C440.7,428,414.2,454.5,381.6,454.5z"/>
        </g>
        </svg>
      </div>
    </div>
  </fieldset>

`);


// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');
