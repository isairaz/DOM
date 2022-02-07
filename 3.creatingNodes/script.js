
//random color function

const randomColor = (element) => {
    let x = Math.floor(Math.random() * 256) 
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)

    var luma = 0.2126 * x + 0.7152 * y + 0.0722 * z
    return  {color: "rgb(" + x + "," + y + "," + z +")", lum: luma}
     
};

let parentElement = document.querySelector('article')
let firstChild = parentElement.querySelector('h2')



let learners = ["Raj", "Sheldon", "Bernadette", "Amy", "Howard"]

//.sort => aller voir la doc
learners = learners.sort((a, b) => 0.5 - Math.random());


for (let i = 0; i < learners.length; i++) {
    let section = document.createElement('section')
    let c = randomColor()
    section.style.backgroundColor = c.color
    let p = document.createElement('p')
    p.innerText = learners[i]
    section.appendChild(p)
    parentElement.appendChild(section)
    if (c.lum < 125) {

        p.style.color = "white"
    }
    else{
        p.style.color = "black"
    }
     
}








