window.addEventListener('load', event => {
    let mainGridContainer = document.querySelector('#mainGridContainer')
    for (let i = 1; i<=16; i++) {
        let gridDiv = document.createElement(`div`);
        gridDiv.id = `gridDiv${i}`;
        mainGridContainer.appendChild(gridDiv);
    }
})