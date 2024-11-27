const container = document.getElementById("container");

// Function that creates a grid
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add('grid-row');

        // nested loop creating horisontal boxes inside each row
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.classList.add('grid-box');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

//function to fill in griBoxes with color
function paintBoxes () {
    const gridBox =document.querySelectorAll('.grid-box');
    let isMouseDown = false;

    container.addEventListener('mousedown', () => {
        isMouseDown = true;
    })
    container.addEventListener('mouseup', () => {
        isMouseDown = false;
    })

    gridBox.forEach(box => {  // every individual box gets an EventListener :)
        box.addEventListener('mousemove', () => {
            if (isMouseDown) {
                box.style.backgroundColor = 'black';
            }
        })

        box.addEventListener('mousedown', () => {
            box.style.backgroundColor = 'black';
        })
    })
}

/*
Function createNewGridButton:
    Create and add button element to page

    When button is clicked:
        Bring up a prompt box asking user to put in button
        Validate input:
            * Check if number
            * Check if number is 4-100
            * If invalid, show error message
        
    If input is valid:
        Remove existing gridbox
        Call createGrid with the prompt size
        call paintBoxes to enable drawing
*/
function createNewGridButton () {
    const newGridButton = document.createElement('button');
    newGridButton.textContent = 'New Grid :)';
    container.prepend(newGridButton);

    newGridButton.addEventListener('click', () => {
        const gridSize = prompt('Enter a new size (4-100):');
        const gridSizeNumber = parseInt(gridSize); 
        if (!isNaN(gridSizeNumber) && gridSizeNumber >= 4 && gridSizeNumber <= 100) {
            container.innerHTML = '';
            createNewGridButton();
            createGrid(gridSizeNumber);
            paintBoxes();
        }
    })
}


createNewGridButton();
// createGrid(40);
// paintBoxes();



