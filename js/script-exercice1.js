/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp week3 day2 ExerciceXP | Exercice 1: Change The Article
 */

/*
1- Using a DOM property, retrieve the h1 and console.log it.

2- Using DOM methods, remove the last paragraph in the <article> tag.

3- Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

4- Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

5- Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

6- BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

7- BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
*/

//1
let article = document.body.firstElementChild;
let h1 = article.firstElementChild;
console.log(h1);

//2
let lastParagraph = document.querySelector("p:last-child");
//console.log(lastParagraph);
article.removeChild(lastParagraph)

//3
let h2 = document.getElementsByTagName("h2")[0];
//console.log(h2);
h2.addEventListener("click", (ev) => {
    ev.target.style.backgroundColor = "red";
});

//4
let h3 = document.getElementsByTagName("h3")[0];
// console.log(h3);
h3.addEventListener("click", (ev) => {
    ev.target.style.display = "none";
});

//5
let button = document.createElement("button");
button.innerHTML = "Clique Moi";
let paragraphs = document.getElementsByTagName("p");
button.addEventListener("click", (ev) => {
    for (const paragraph of paragraphs) {
        paragraph.style.fontWeight = "bold";
    }
});
article.appendChild(button);

//6
h1.addEventListener("mouseover", (ev) => {
    let randomSize = Math.floor(Math.random() * 100);
    //console.log(randomSize);
    ev.target.style.fontSize = randomSize + "px";
});

//7
let secondParagraph = paragraphs[1];
//console.log(secondParagraph);
secondParagraph.addEventListener("mouseover", (ev) => {
    ev.target.classList.add("fadeIn");
    console.log(ev.target);
});