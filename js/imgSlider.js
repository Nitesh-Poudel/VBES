      // Array of image URLs
      const images = [
        "../asset/banner1.jpg",
        "../asset/banner2.jpg",
        "../asset/banner3.jpg",
        
    ];
    
    let currentIndex = 0;
    const imgElement = document.querySelector('.bannerImg .img img');
    const imgIndicator = document.querySelector('.bannerImg .imgIndicator');
    
    function showImage(index) {
       
        imgElement.style.opacity = 0;
    
        setTimeout(() => {
          
            imgElement.src = images[index];
         
            imgIndicator.textContent = 'OOO'.repeat(index + 1); 
            
           
            imgElement.style.opacity = 1;
            imgElement.style.transition = 'opacity 0.5s ease-in-out'; 
        }); 
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    
    
    showImage(currentIndex);
    
   
    setInterval(nextImage, 3000);