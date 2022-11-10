
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        let takeText = entry.target.querySelector('.h3');
        let wrapperBox = entry.target.querySelectorAll('.col-md-4>.service-wrapper');
        if(entry.isIntersecting)
        {
            takeText.classList.add('animate__rollIn');
        }
        else
        {
            takeText.classList.remove('animate__rollIn');
        }
    });
});


let wrapperRow = document.querySelectorAll('.row');
for(const key in wrapperRow)
{
    observer.observe(wrapperRow[key]);
}
