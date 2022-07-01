const elements = document.querySelectorAll('.date');
const dates = [...elements];

onload = () => {
    dates.map((item, index) => {
        let now = new Date();
        let dt = new Date(now.getTime() + (24*60*60*1000*index))
        item.innerHTML = dt.toLocaleDateString("en-US",{month: 'long', day:'2-digit', year:'numeric'})
    })
}


function readMoreLess(elem){
    const target = elem.parentElement.parentElement.children[2].children[1];
    target.classList.toggle('read-less');
    elem.innerHTML = target.classList.contains('read-less') ? "Read More" : "Read Less";
}
