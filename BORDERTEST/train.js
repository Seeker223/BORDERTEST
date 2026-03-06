
    // Your JavaScript code here

    // Example using map
    const container = document.getElementById('container');
    const posts = [
        { id: 1, name: 'Item 1', 
          title: 'mike is having a hotparty', 
          imageUrl: "BORDERTEST/BORDERTEST/image/profile-pic/member-5.png"
,         imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
        },
        { id: 2, name: 'Item 2', 
          title: 'kunle is having a hotparty',
          imageUrl: 'BORDERTEST/image/profile-pic/member-5.png'
          ,imagePost: 'BORDERTEST/image/FB_IMG_16139169412055495.jpg' },
        { id: 3, name: 'Item 3'
        ,imagePost: "BORDERTEST/image/profile-pic/eagle 1.jpg"}
    ];
    

    // Using map to create an array of HTML strings
    const htmlArray = posts.map(post => `    
            <legend><span style="color: tomato;">(((HEYDAY!!! charles is <br> having a birthday)))</span></legend>
        <div class="post-container">
            
            <div class="post-write">
            <img src="${post.imageUrl}">
       
                <div class="post-words">
                    <p class="post-name">${post.name}</p>
                    <p class="post-desc"><span>heyday!!!</span> ${post.title}</p>
                </div>
                    </div>    
                    <div class="post-card">
                <img src="${post.imagePost}">
            </div>
        </div>
       `);

    // Joining the array and setting innerHTML of the container
    container.innerHTML = htmlArray.join('');
