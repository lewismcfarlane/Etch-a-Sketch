let gridContainer = document.querySelector('#gridContainer')
let clearGrid = document.querySelector('#clearGridButton')
let isMouseDown = false;
let i;
// On load: create 256 (16x16) divs which will form the etch-a-sketch
window.addEventListener('load', event => {
    
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

clearGrid.addEventListener('click', () => {
    document.querySelectorAll('.gridItem.drawOnGrid').forEach(item =>{
        item.classList.remove('drawOnGrid');
    });
});