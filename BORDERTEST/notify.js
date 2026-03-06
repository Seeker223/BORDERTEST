
const container = document.getElementsByClassName('profile-details')[0];

 
 // Define the data for the top-list container


const notifications = [
  {
    id:1,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  },
  {
    id:2,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
  {
    id:3,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
    {
      id: 4,
      img: '/BORDERTEST/image/myimage/1704598877953.jpg',
      text1: 'shaddy loom',
      text2: 'you just got a new friend',
      date: '22:00',
  
  
    },
      {
    id:5,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  },
  {
    id:6,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
  {
    id:7,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
    {
      id: 8,
      img: '/BORDERTEST/image/myimage/1704598877953.jpg',
      text1: 'shaddy loom',
      text2: 'you just got a new friend',
      date: '22:00',
  
  
    },
      {
    id:9,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  },
  {
    id:10,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
  {
    id:11,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
    {
      id: 12,
      img: '/BORDERTEST/image/myimage/1704598877953.jpg',
      text1: 'shaddy loom',
      text2: 'you just got a new friend',
      date: '22:00',
  
  
    },
      {
    id:13,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  },
  {
    id:14,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
  {
    id:15,
img:'/BORDERTEST/image/myimage/1704598877953.jpg',
text1:'shaddy loom',
text2:'you just got a new friend',
date:'22:00',
  
  
  },
    {
      id: 16,
      img: '/BORDERTEST/image/myimage/1704598877953.jpg',
      text1: 'shaddy loom',
      text2: 'you just got a new friend',
      date: '22:00',
  
  
    },
    
    
];



// Using map to create an array of HTML strings
const htmlArray = Array.from(notifications).map(notification => ` 

<div class='notifi'>
  <div class="notify-logo">
    log
  </div>
  <div class="notifi-contain">
    <div class="note">
          <div class="notify-image">
      <img src="${notification.img}" alt="">
  </div>
  <p><h4>${notification.text1}</h4></p>
  <p class="date">${notification.date}</p>
    </div>

  <p>${notification.text2}</p>
  <hr class='hr'>
  </div>

</div>
`);




// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');
