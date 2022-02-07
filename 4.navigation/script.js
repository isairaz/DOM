//move the ol, li to the begin

let olLastChild = document.querySelector('li:last-child'),
    olFirstChild = document.querySelector('li:first-child'),
 ol = document.querySelector('ol')


ol.prepend(olLastChild)

//move the h2 of the third section to the second and vice versa

let thirdSection = document.querySelector('section:nth-child(2)')
let secondSection = document.querySelector('section:nth-child(3)')
let h2OfThirdSection = thirdSection.querySelector('h2')
let h2OfsecondSection = secondSection.querySelector('h2')

secondSection.prepend(h2OfThirdSection)
thirdSection.prepend(h2OfsecondSection)

//delete last section of the DOM

let lastSection = document.querySelector('section:last-child')
lastSection.remove()