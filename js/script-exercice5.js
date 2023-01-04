/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day2 ExerciceXP | Exercice 5: Event Listeners
 */

/*
1-Add many events listeners to one element on your webpage. 
  Use the click, mouseover, mouseout and dblclick events.
2-Each listener should do a different thing, 
  for instance - change position x, change position y, change color, change the font size… and more.
*/

//1
let h1 = document.body.firstElementChild;
h1.addEventListener("click", (ev) => {
    let cptColorChange = Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9);
    ev.target.style.color = "#" + cptColorChange;
    //console.log(cptColorChange);
});
h1.addEventListener("mouseover", (ev) => {
    ev.target.style.opacity = 1;
});
h1.addEventListener("mouseout", (ev) => {
    ev.target.style.opacity = 0.3;
    ev.target.style.fontSize = "5em";
});
let nbPixel = 15;
h1.addEventListener("dblclick", (ev) => {
    ev.target.style.fontSize = nbPixel + "px";
    nbPixel += 5;
});