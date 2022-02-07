//change and display the title (h1)
let title = document.querySelector('h1')
title.innerText = 'newTitle'
console.log(title.innerText)

//display all children
let children = document.body.childNodes
children.forEach(element => {
    console.log(element.innerText)
});

//change the background color
let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);
let randomBgColor = "rgb(" + x + "," + y + "," + z + ")";
document.body.style.backgroundColor = randomBgColor