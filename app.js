let gridContainer = document.querySelector('#gridContainer');
let clearGrid = document.querySelector('#clearGridButton');
let sizeButton = document.querySelector('#gridSizeButton');
let isMouseDown = false;


// On load: create 256 (16x16) divs which will form the etch-a-sketch
window.addEventListener('load', event => {
    let gridLength = 16
    for (i = 1; i<=256; i++) {
        let gridDiv = document.createElement(`div`);
        gridDiv.classList.add("gridItem");
        gridDiv.id = `grid${i}`;
        gridContainer.appendChild(gridDiv);
        // Attach mousedown event to each grid item
        document.addEventListener('mousedown', handleDrag);
    }
})

let handleDrag = event => {
    // Mouse button is down
    isMouseDown = true;
    // Draws on the div grid square
    if (event.target.classList.contains('gridItem')) {
        event.target.classList.add('drawOnGrid');
    }
    // Add mouseup and mousemove event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
};

// Function to draw on grid if mouse is moving from div to div
let handleMouseMove = (event) => {
    // Draws on grid if entering a new grid
    if (isMouseDown && event.target.classList.contains('gridItem')) {
        event.target.classList.add('drawOnGrid');
    }
};

// function to respond to left mouse button not being pressed
let handleMouseUp = () => {
    isMouseDown = false;
    // Removes event listeners after mouse button is up
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}
// Function to clear drawing on etch-a-sketch
let clearEtchASketch = () => {
    document.querySelectorAll('.gridItem.drawOnGrid').forEach(item => {
        item.classList.remove('drawOnGrid');
    });
}

let removeGrid = () => {
    document.querySelectorAll('.gridItem').forEach(item => {
        item.remove();
    })
}

// Event listener for clearing the etch-a-sketch
clearGrid.addEventListener('click', clearEtchASketch);

// Event listener for changing grid size
sizeButton.addEventListener('click', () => {
    let gridLength = prompt('Choose a stencil size between 10 and 100!');
    // Checks if user cancels the prompt, if it's an empty string or not a number
    if (gridLength === null || gridLength.trim() === '') {
        // Cancels the operation
        return;
    }

    // Grid size min and max size handling AND non number entries handling
    if (gridLength > 100 || gridLength < 10 ) { 
        gridLength = prompt('Please pick a size between 10 and 100.');
    }
    let gridSize = gridLength ** 2;
    removeGrid();
    document.documentElement.style.setProperty('--gridLength', gridLength);
    // Same logic as in on load event listener to create grid
    for (i = 1; i<=gridSize; i++) {
        let gridDiv = document.createElement(`div`);
        gridDiv.classList.add("gridItem");
        gridDiv.id = `grid${i}`;
        gridContainer.appendChild(gridDiv);
        document.addEventListener('mousedown', handleDrag);
    }
    
})