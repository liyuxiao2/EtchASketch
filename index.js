const container = document.getElementById("container");

const title = document.getElementById("title");

const buttonList = document.getElementById("buttonList");

const footer = document.getElementById("footer");

const footerHead = document.getElementById("head");


let grid_size = 16;

title.textContent = "Etch A Sketch";

for(let i = 0; i < 16; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++){
        let square = document.createElement("div");

        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        row.appendChild(square);
    }
    container.appendChild(row);
}

const buttonNames = ["16*16", "32*32", "64*64", "128*128"];

buttonNames.forEach((name) => {
    let button = document.createElement("button");

    button.textContent = name;

    button.addEventListener("click", () => {
        const size = parseInt(name.split("*")[0]);

        makeGrid(size);
    })

    buttonList.appendChild(button);
})

//splices the text of the button and takes that to make the new grid
function makeGrid(size, is_color){

    //empty the grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < size; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++){
            let square = document.createElement("div");
    
            square.classList.add("square");

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            })
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    grid_size = size;
}


function clearGrid(){
    const squares = container.querySelectorAll(".square")

    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function randomColor() {
    const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`;
}


function randomizeRGB(){
    const squares = container.querySelectorAll(".square")

    squares.forEach((square) => {
        // Clone the node to remove all existing event listeners
        const newSquare = square.cloneNode(true);
        
        // Replace the old square with the new one
        square.parentNode.replaceChild(newSquare, square);

        // Add new mouseover event listener for random colors
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = randomColor(); // Set a random background color
        });
    });
}


const clearButton = document.createElement("button");

clearButton.textContent = "Clear Grid";

clearButton.addEventListener("click", clearGrid);

const rainbowButton = document.createElement("button");

rainbowButton.textContent = "RAINBOW";

rainbowButton.addEventListener("click", randomizeRGB);


buttonList.appendChild(clearButton);
buttonList.appendChild(rainbowButton);



// Create a paragraph for the footer text
const footerText = document.createElement('p');
footerText.textContent = 'Liyu Xiao';
footerHead.appendChild(footerText);

// Create the GitHub link
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/liyuxiao2'; // Replace with your GitHub URL
githubLink.target = '_blank'; // Opens the link in a new tab
githubLink.textContent = 'GitHub';
footer.appendChild(githubLink);


// Create the Personal Website link
const websiteLink = document.createElement('a');
websiteLink.href = 'https://www.liyuxiao.ca'; // Replace with your website URL
websiteLink.target = '_blank'; // Opens the link in a new tab
websiteLink.textContent = 'Personal Website';
footer.appendChild(websiteLink);


