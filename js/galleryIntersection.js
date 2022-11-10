const galleryObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        let animationClass = ['animate__fadeInBottomRight', 'animate__fadeInUpBig', 'animate__flipInX', 'animate__rotateInDownRight', 'animate__rotateInDownLeft'];
        var randomItem = animationClass[Math.floor(Math.random() * animationClass.length)];
        let image = entry.target.querySelectorAll('.imagesWrapper');
        if(entry.isIntersecting)
        {
            image.forEach(function (img){
                img.classList.add('animate__animated');
                img.classList.add(randomItem);
            });
        }
        else
        {
            image.forEach(function (img){
                img.classList.remove('animate__animated');
                img.classList.remove(randomItem);
            });
        }
    });
});




let imagesWrapper = document.querySelectorAll('.col-md-3');
imagesWrapper.forEach(function(wrapper){
    galleryObserver.observe(wrapper);
});
