
onload = () => {
    let targets = document.querySelectorAll('.input > label');
    targets.forEach((item) => {
        item.innerHTML = item.innerHTML.split('').map((elem, index) => {
            return(
                `<span style="transition-delay: ${(index+1)*80}ms" >${elem}</span>`
            );
        }).join('')
    })
}