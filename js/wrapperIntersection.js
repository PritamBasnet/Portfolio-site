const observerCol = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        let wrapper = entry.target.querySelectorAll('.service-wrapper');
        if(entry.isIntersecting)
        {
            wrapper.forEach(function(wrap){
                wrap.classList.add('animate__fadeInUp');
                wrap.classList.remove('animate__fadeOutDown');
            });
        }
        else
        {
            wrapper.forEach(function(wrap){
                wrap.classList.remove('animate__fadeInUp');
                wrap.classList.add('animate__fadeOutDown');
            });
        }
    });
});
// Taking the col-4
let col4 = document.querySelectorAll('.col-md-4');
for(const key in col4)
{
    observerCol.observe(col4[key]);
}