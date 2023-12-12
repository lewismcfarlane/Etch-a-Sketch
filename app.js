// On load: create 16 divs which will form the etch-a-sketch
window.addEventListener('load', event => {
    let mainGridContainer = document.querySelector('#mainGridContainer')
    for (let i = 1; i<=16; i++) {
        let gridDiv = document.createElement(`div`);
        gridDiv.classList.add("gridItem");
        gridDiv.id = `grid${i}`;
        mainGridContainer.appendChild(gridDiv);
    }
})