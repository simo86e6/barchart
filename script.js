"use strict";
let randomBarHeight;

const barCharts = [];
const implementedBars = document.querySelectorAll(".bar")

window.addEventListener("DOMContentLoaded", createArrayObjects);

function createArrayObjects(){
    for (let i = 0; i < 40; i++){
        randomBarHeight = Math.round(Math.random()*32);
        barCharts.push(randomBarHeight);
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = randomBarHeight +  "vh";
        document.querySelector("#container").append(bar);
    }
    changeBars();
}


function changeBars() {

    const implementedBars = document.querySelectorAll(".bar")
    randomBarHeight = Math.round(Math.random()*32);
    barCharts.push(randomBarHeight);
    barCharts.shift();

    for (let i = 0; i < 40; i++) {
        implementedBars[i].innerHTML = "";
        implementedBars[i].classList.add("hide");
        implementedBars[i].innerHTML = barCharts[i];
        implementedBars[i].classList.remove("low", "medium", "high");
        implementedBars[i].style.height = barCharts[i] + "vh";
        if(barCharts[i] <= 10){
            implementedBars[i].classList.add("low");
        } else if(barCharts[i] <= 20){
            implementedBars[i].classList.add("medium");
        } else {
            implementedBars[i].classList.add("high");
        }
        
      }
    setTimeout(changeBars, 500);
    
}

