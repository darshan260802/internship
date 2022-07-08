window.onload = () => {
    
    setTimeout(() => {
        document.querySelector('#delay_show').style.fontSize = '20.72px';
    },3000)
}


const sectionStats = new IntersectionObserver((entry) => {
    let a = [...entry[0].target.children];
    if(entry[0].isIntersecting) // Specilize div
    {
        a.forEach((item) => {
            item.style.transform = "scale(1)";
        })  
    }else{
        a.forEach((item) => {
            item.style.transform = "scale(0) ";
        })
    }
      
})

const specializeDiv = new IntersectionObserver((entry) => {
    let a = [...entry[0].target.children];
    if(entry[0].isIntersecting) // Specilize div
    {
        a.forEach((item) => {
            item.style.opacity = "100%";
        })  
    }else{
        a.forEach((item) => {
            item.style.opacity = "0%";
        })
    }
})

const processDiv = new IntersectionObserver((entry) => {
    let a = [...entry[0].target.children].map((item) => item.children[0]);
    if(entry[0].isIntersecting) // Specilize div
    {
        a.forEach((item) => {
            item.classList.remove("animate-process");
        })  
    }else{
        a.forEach((item) => {
            item.classList.add("animate-process");
        })
    }
})

sectionStats.observe(document.querySelector('.section-stats'));
specializeDiv.observe(document.querySelector('.specialize-div'));
processDiv.observe(document.querySelector('.process-div'));

document.querySelector("#projects-btn").addEventListener('click', () => {
    location = "projects.html"
})