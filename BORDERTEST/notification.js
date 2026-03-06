// Your JavaScript code here

// Example using map
const container = document.getElementsByClassName('notification')[0];

istheme = true;

const alarms = [
  {
    id: 1,
    name: 'charlie',
    image: "/BORDERTEST/image/1701250559335.jpg",
    note:'charlie sent you a message'
  },
    {
      id: 2,
      name: 'badun',
      image: "/BORDERTEST/image/1701250559335.jpg",
      note: 'charlie sent you a message'
    },
      {
        id: 3,
        name: 'oluwatobi',
        image: "/BORDERTEST/image/1701250576772.jpg",
        note: 'charlie sent you a message'
      },
        {
          id: 4,
          name: 'dorcas',
          image: "/BORDERTEST/image/1701250559335.jpg",
          note: 'charlie sent you a message'
        },
          {
            id: 5,
            name: 'boriscilesor',
            image: "/BORDERTEST/image/1701250559335.jpg",
            note: 'charlie sent you a message'
          },
          {
            id: 1,
            name: 'charlie',
            image: "/BORDERTEST/image/1701250559335.jpg",
            note: 'charlie sent you a message'
          },
          {
            id: 2,
            name: 'badun',
            image: "/BORDERTEST/image/1701250559335.jpg",
            note: 'charlie sent you a message'
          },
          {
            id: 3,
            name: 'oluwatobi',
            image: "/BORDERTEST/image/1701250576772.jpg",
            note: 'charlie sent you a message'
          },
          {
            id: 4,
            name: 'dorcas',
            image: "/BORDERTEST/image/1701250559335.jpg",
            note: 'charlie sent you a message'
          },
          {
            id: 5,
            name: 'boriscilesor',
            image: "/BORDERTEST/image/1701250559335.jpg",
            note: 'charlie sent you a message'
          },
];


// Using map to create an array of HTML strings
const htmlArray = alarms.map(alarm => ` 

           <div class="note-container">
            <div class="notebox">
           <img src="${alarm.image}" alt=""></img>
           <div class="name">${alarm.name}</div>
           </div>
           <div class="note">
           hh! ${alarm.note}</div>
        </div>
`);

// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');