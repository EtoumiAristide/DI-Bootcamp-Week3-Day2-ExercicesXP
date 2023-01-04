/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 day2 ExerciceXP | Exercice 2:Work With Forms
 */

/*
1- Retrieve the form and console.log it.

2- Retrieve the inputs by their id and console.log them.

3- Retrieve the inputs by their name attribute and console.log them.

4- When the user submits the form (ie. submit event listener)
    °use event.preventDefault(), why ?
    °get the values of the input tags,
    °make sure that they are not empty,
    °create an li per input value,
    °then append them to a the <ul class="usersAnswer"></ul>, below the form.
*/

//1
let form = document.forms[0];
//console.log(form);

//2
let inputFName = document.getElementById("fname");
let inputLName = document.getElementById("lname");
// console.log(inputFName);
// console.log(inputLName);

//3
inputFName = form.elements.fname;
inputLName = form.elements.lname;
// console.log(inputFName);
// console.log(inputLName);

//4
let ul = document.getElementsByClassName("usersAnswer")[0];
let liFName, liLName;
form.addEventListener("submit", (ev) => {
    ev.preventDefault(); //Pour annuler l'action de soumission du formulaire par defaut

    let dataFName = inputFName.value;
    let dataLName = inputLName.value;

    if (dataFName.trim() == '') {
        alert("First name cannot be empty");
        inputFName.focus();
    } else if (dataLName.trim() == '') {
        alert("Last name cannot be empty");
        inputLName.focus();
    } else {
        clearChamps();

        liFName = document.createElement("li");
        liFName.innerHTML = dataFName;

        liLName = document.createElement("li");
        liLName.innerHTML = dataLName;

        ul.appendChild(liFName);
        ul.appendChild(liLName);
    }

    //console.log(dataLName);
});

inputFName.addEventListener("input", clearResult);
inputLName.addEventListener("input", clearResult);

function clearResult() {
    ul.innerHTML = "";
}

function clearChamps() {
    inputFName.value = "";
    inputLName.value = "";
}