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

createGrid(40);
paintBoxes();



