
    const bindContainerLeft = document.querySelector('.bind-container-left');
    
    const bindContainerUp = document.querySelector('.bind-container-up');

    bindContainerLeft.addEventListener('scroll', function () {
    
        if (bindContainerLeft.scrollTop === 0) {
            // When scrolled to the top in bind-container-left
            const firstImage = bindContainerLeft.querySelector('.binder-img-2:first-child');
            if (firstImage) {
                // Clone the first image
                const clonedImage = firstImage.cloneNode(true);
                // Add the cloned image to bind-container-up
                bindContainerUp.appendChild(clonedImage);
                // Remove the first image from bind-container-left
                firstImage.remove();
            }
        }
    });

    bindContainerUp.addEventListener('click', function () {
        // When clicked in bind-container-up
        const firstImage = bindContainerUp.querySelector('.binder-img-1:first-child');
        if (firstImage) {
            // Clone the first image
            const clonedImage = firstImage.cloneNode(true);
            // Add the cloned image to bind-container-left
            bindContainerLeft.appendChild(clonedImage);
            // Remove the first image from bind-container-up
            firstImage.remove();
        }
    });



