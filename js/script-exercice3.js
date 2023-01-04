/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day2 ExerciceXP | Exercice 3:Transform The Sentence
 */

/*
1-Declare a global variable named allBoldItems.

2-Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

3-Create a function called highlight() that changes the color of all the bold text to blue.

4-Create a function called return_normal() that changes the color of all the bold text back to black.

5-Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph)
*/

//1
let allBoldItems;

//2
function getBold_items() {
    allBoldItems = document.getElementsByTagName("strong");
}

//3
function highlight() {
    for (const boldItem of allBoldItems) {
        boldItem.style.color = "blue";
    }
}

//4
function return_normal() {
    for (const boldItem of allBoldItems) {
        boldItem.style.color = "black";
    }
}

//5
let paragraph = document.getElementsByTagName("p")[0];
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", return_normal);

getBold_items();