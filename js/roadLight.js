
//Цвета светофора

let redColor = document.querySelector(".red-color");
let yellowColor = document.querySelector(".yellow-color");
let greenColor = document.querySelector(".green-color");

//кнопка изменения цвета

let changeColorBtn = document.querySelector(".change-color");


// функция для изменения цвета

let i = 1;
function changeColor() {
    
    if (i == 1) {
        redColor.style.backgroundColor = "red";
        redColor.style.boxShadow = "0px 0px 96px 40px rgba(255,0,0,1)"
        yellowColor.style.backgroundColor = "black";
        yellowColor.style.boxShadow = "0px 0px 96px 40px rgba(255,255,0,0)"
        greenColor.style.backgroundColor = "black";
        greenColor.style.boxShadow = "0px 0px 96px 40px rgba(124,252,0,0)"
        console.log("red")
        console.log(i)
    } else if (i == 2) {
        redColor.style.backgroundColor = "black";
        redColor.style.boxShadow = "0px 0px 96px 40px rgba(255,0,0,0)"
        yellowColor.style.backgroundColor = "yellow";
        yellowColor.style.boxShadow = "0px 0px 96px 40px rgba(255,255,0,1)"
        greenColor.style.backgroundColor = "black";
        greenColor.style.boxShadow = "0px 0px 96px 40px rgba(124,252,0,0)"
        console.log("yellow")
        console.log(i)
    } else if (i == 3) {
        redColor.style.backgroundColor = "black";
        redColor.style.boxShadow = "0px 0px 96px 40px rgba(255,0,0,0)"
        yellowColor.style.backgroundColor = "black";
        yellowColor.style.boxShadow = "0px 0px 96px 40px rgba(255,255,0,0)"
        greenColor.style.background = "rgba(124,252,0,1)";
        greenColor.style.boxShadow = "0px 0px 96px 40px rgba(124,252,0,1)"
        console.log("green")
        console.log(i)
        i = 0;
    }
}

// добавляему действие на кнопку

changeColorBtn.addEventListener("click", function () {
    changeColor();
    i++;
});