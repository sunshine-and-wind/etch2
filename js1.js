function createDivs(n) {
    let hw = (n)
    n = (n * n); 
    for (let i = 0; i < n; i++) {
        const divs = document.createElement('div');
        divs.id = "square";
        divs.style.height = `${(512/hw)}px`;
        divs.style.width = `${(512/hw)}px`;
        const container = document.querySelector('.container');
        container.appendChild(divs);
        console.log(divs);
    }   
}

createDivs(4);
