function createGrid () {
    const container = document.getElementById('container');
    const userInput = Number(prompt('Enter a number of squares per side'));
    input = userInput * userInput;
    //The user input should be a number between 1 and 100.
    if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    //Define the width of a grid item.
    const itemWidth = 100 / userInput;
    const fragment = document.createDocumentFragment();
    const itemHeight = container.offsetHeight / userInput;
    // Create the grid
    for(let i = 0; i < input; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.flex = `0 0 ${itemWidth}%`;
        gridItem.style.height = `${itemHeight}px`;
        // Add event listener that changes the background color of the cells on mouse hover.
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'yellow';
        });
    fragment.appendChild(gridItem);
    }
container.appendChild(fragment);
}

createGrid();