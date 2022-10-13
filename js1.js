const container = document.querySelector('.container');
let divSquare = document.getElementsByClassName('square');


//create grid and make default pen black

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
    initBoard();
};

createDivs(16);

// create initial board state: etch-a-sketch mode with black pen

function initBoard() {
for (const divs of divSquare) {
    divs.addEventListener('mouseenter', function black() {
        divs.id = 'black'
        })
}
}


// eraser state: mouseenter = white

function eraser() {
    for (const divs of divSquare) {
    divs.addEventListener('mouseenter', () => {
        if (divs.id = 'black') {
        divs.id = 'white'
        };
    })
    }
}

function pen() {
    for (const divs of divSquare) {
    divs.addEventListener('mouseenter', () => { {
        divs.id = 'black'
        };
    })
    }
}

function resetBox() {
    createDivs(16);    
    }

function newNumber(newNum) {
    newNum = document.querySelector('input').value;
    createDivs(newNum);
}



