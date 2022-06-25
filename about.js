onload = () => {
    const skillsProgress = new IntersectionObserver((entry) => {
        const dones = [...entry[0].target.children].map(item => item.children[0].children[0]);
        if(entry[0].isIntersecting)
        {
            dones.forEach((item) => {
                item.style.width = item.getAttribute('data-progress');
            })
        }else{
            dones.forEach((item) => {
                item.style.width = '0%';
            })
        }
    })

    skillsProgress.observe(document.querySelector('.progress-container'))


    const counters = new IntersectionObserver((entry) => {
        const counter = [...entry[0].target.children].map(item => item.children[1]);

        if(entry[0].isIntersecting)
        {
            counter.forEach((item) => {
                let count = 0;
                let target = parseInt(item.getAttribute('data-count'));
                const interval = setInterval(() => {
                    if(count === target) clearInterval(interval);
                    item.innerHTML = count ;
                    count++;
                }, 10)
            })

        }
    })

    counters.observe(document.querySelector('.counters'));
}