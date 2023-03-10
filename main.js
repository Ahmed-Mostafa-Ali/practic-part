const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle"
];
const colores = ["#01d2fd" , "#ffc700" , "#fe9f12" , "#06d0c7"];
const boxes = document.querySelectorAll(".container div");
let generatepatternes = () =>{
    boxes.forEach((e) =>{
        e.className="";
        let i =Math.floor(Math.random() * shapes.length);
        let j =Math.floor(Math.random() * colores.length);
        e.classList.add(shapes[i]);
        e.style.backgroundColor = colores[j];
        console.log(e);

    })
}
btn.addEventListener("click", generatepatternes);
window.addEventListener("load" , generatepatternes);
//change background color
const colors = ["rgba(203, 27, 27, 0.54)", "#CB1B958A", "rgba(27, 182, 203, 0.54)"]; // array of three colors
let index = 0; // initialize index variable to 0

function changeBackground() {
  document.body.style.backgroundColor = colors[index]; // set background color to the current color
  index = (index + 1) % colors.length; // increment index and wrap around to 0 when it reaches the end of the array
}

setInterval(changeBackground, 2000); // call changeBackground() function every 1000 milliseconds
window.addEventListener("load", changeBackground);
