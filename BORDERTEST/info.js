const infos = [ ];

// Populate the top-list container with HTML
infoContainer.innerHTML = infos.map(info => `
 <div class="happi-profile">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet impedit labore fuga eligendi aspernatur animi, dolore ad recusandae ipsa porro vero perferendis deserunt sed, neque itaque officiis alias nisi, et aliquam unde voluptatum velit? Fugit asperiores ea, ut tempora neque culpa soluta placeat! Quibusdam ullam sed molestiae nihil doloribus.
                 </div> <
        div class = "my-pics" >
        <img src="/BORDERTEST/image/post-pics/article-ph-2.png" alt="">
                   <img src="/BORDERTEST/image/post-pics/article-ph-2.png" alt="">
                               <img src="/BORDERTEST/image/post-pics/article-ph-2.png" alt="">
                   
                 </div>
`).join('');
