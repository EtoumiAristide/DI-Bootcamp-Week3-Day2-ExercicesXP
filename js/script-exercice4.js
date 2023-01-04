/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day2 ExercicesXP | Exercice 4: Volume Of A Sphere
 */

//1-Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

let form = document.forms[0];
let inputRadius = form.elements.radius;
let inputVolume = form.elements.volume;
inputVolume.setAttribute("readOnly", true);

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    //tests si champs non vide et contient nombre
    let dataInputRadius = inputRadius.value.trim();
    if (dataInputRadius == '') {
        errorMessages("Veuillez renseigner le rayon svp!", inputRadius)
    } else if (isNaN(dataInputRadius)) {
        errorMessages("Veuillez renseigner un nombre svp", inputRadius)
    } else {
        let formule = (4 / 3) * Math.PI * Math.pow(parseFloat(dataInputRadius), 3);
        inputVolume.value = formule;
    }
});

function errorMessages(message, input) {
    alert(message);
    input.focus();
}