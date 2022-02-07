//list all the li children

let ul = document.querySelector('ul')
let li = ul.children
console.log(li)

for (let i of li) {
    if(i.nodeType == 1) {
        console.log(i)
        if(i.innerText === "Fast and Furious") {
            // console.log("it works")
            ul.prepend(i)
            i.setAttribute('class', 'important')
            i.addEventListener('click', () => {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            }
            )

            
        } else {
            i.addEventListener('click', (event) => {
    
                alert(event.target.innerText)
        })}
        
        
    }}

   
    
// randomly change the order of the li elements

    document.body.addEventListener('keyup', (event) => {
        if(event.code == "KeyR") {
           for (let i = parseInt(Math.random() * li.length); i < li.length; i++) {
               let randomLi = li[i]
               ul.prepend(randomLi)
               
           }
           
           for (let i of li) {
               if (i.innerText === "Fast and Furious") {
                   ul.prepend(i)
               }
           }

    }
        else if (event.code == "KeyD") {
            
            ul.insertAdjacentHTML('afterbegin', "<li>Fast and Furious</li>")
                
    
        }

})

// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"

let body = document.querySelector('body')
let div = document.createElement('div')
body.insertBefore(div, ul)

let select = document.createElement('select')
let option1 = document.createElement('option')
let option2 = document.createElement('option')

option1.innerHTML = "important franchises"
option2.innerHTML = "normal franchises"

div.append(select)
select.append(option2)
select.append(option1)

select.addEventListener('change', (event) => {
    // console.log(event.target.value)
    if (event.target.value === "important franchises") {
    for (let i of li) {

        if(i.classList == "important") {
            i.style.visibility = "visible"

        }
        else if(i.classList != "important") {
            i.style.visibility = "hidden"
        }
        
    }
}
    else if (event.target.value == "normal franchises") {
        for (let i of li) {
    
            i.style.visibility = "visible"
    }
}
})


       
    
