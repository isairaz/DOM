//add a title attribute to each element that have a " important " class
let important = document.querySelectorAll('.important')
important.forEach(element => {
    element.setAttribute("title", "this is a important class")
    console.log(element)
});

//Select all the imgs tags and loop through them. If they have no important class, turn their display property to none
let img = document.querySelectorAll("img")
img.forEach(element => {
    if(element.classList.contains("important")) {
        element.style.display = "none"
        console.log(element)
    }
 
}); 

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well
let paragraph = document.querySelectorAll('p')
paragraph.forEach(element => {
    if(element.classList.length > 0) {
        console.log(element.innerText + " and his class name :" + " " + element.classList)
    }
    else {
        console.log(element.innerText)
    }
    
});

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

paragraph.forEach(element => {
    let x = Math.floor(Math.random() * 256) 
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let randomColor = "rgb(" + x + "," + y + "," + z +")"
    if(element.classList.length <= 0) {
        element.style.color = randomColor
        console.log(element)
    }
});