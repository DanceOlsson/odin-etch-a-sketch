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

createGrid(16);