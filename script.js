// create function that takes input and when button click generates
//  a grid of divs that fill up grid container

// receive input -> variable
const input = document.querySelector('.input-ele');
const button = document.querySelector('.button-ele');
const gridContainer = document.querySelector('.grid-container')
// value of x in: x * x (grid)
let gridLengthAndHeight = '';
const gridtext = document.querySelector('.grid-dim')
let opacityCounter = 0;
let darken = 100;

let randomColor = function randomColor(){
    let min = 0;
    let max = 255;
    let randomNumber = Math.floor((Math.random()*101))
    return randomNumber
}

button.addEventListener('click', ()=>{
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let value = input.value;
    // if value inputted is not a number -> dont do anything
    if (!isNaN(value)){
        // making edge case for 0 just incase it doesnt work with grid creator
        if (Number(value) === 0){
            gridLengthAndHeight = value;
            input.value = '';
        // check to make sure value isnt a float
        }  else if (Number(value)>64){
            alert("The highest number is 64!")
            input.value = '';
        } else if (Math.floor(Number(value)) % input.value === 0){
            gridLengthAndHeight = value;
            input.value = '';
        } else {
            input.value = '';
            alert("Please input a whole number")
        }
    } else {
        input.value = '';
        alert("Please input a whole number");
    }

    console.log(gridLengthAndHeight)

    let i = Number(gridLengthAndHeight);
    while (i>0){
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-unit')
        gridContainer.appendChild(newDiv);
        let j = Number(gridLengthAndHeight)
        while (j>0){
            const divsDiv = document.createElement('div');
            divsDiv.classList.add('grid-unit2');
            divsDiv.addEventListener('mouseenter', ()=>{
                divsDiv.style.backgroundColor = `hsl(${randomColor()},${randomColor()}%,${darken}%`;
                darken = darken -10;
            })

            newDiv.appendChild(divsDiv)
            j--
        }
        i--
    }

    gridtext.textContent = `${gridLengthAndHeight} x ${gridLengthAndHeight}`
})

