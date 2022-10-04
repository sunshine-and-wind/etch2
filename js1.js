const container = document.querySelector('.container');
const divSquare = document.getElementsByClassName('square');


function createDivs(n) {
    container.innerHTML="";
    let hw = (n)
    n = (n * n); 
    for (let i = 0; i < n; i++) {
        const divs = document.createElement('div');
        divs.classList.add('square');
        divs.style.height = `${(512/hw)}px`;
        divs.style.width = `${(512/hw)}px`;
        container.appendChild(divs);
    }
    for (const square of divSquare) {
        square.addEventListener('mousedown', function onClick() {
            square.id = 'changed'
        });
        }

    }   

createDivs(16);


function newNumber() {
    const newNum = document.querySelector('input').value;
    createDivs(newNum);
}

function resetBox() {
    createDivs(16)
}