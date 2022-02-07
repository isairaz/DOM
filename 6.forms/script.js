//displaying the input name value into the span

const getNameInputValue =() => {
    // Selecting the input element and get its value 
    let inputVal = document.querySelector("#firstname").value;
    
    // Displaying the value
    let disValue = document.querySelector('#display-firstname')
    disValue.innerText = inputVal
}

const getAgeInputValue = () => {

    let inputAgeVal = document.querySelector('#age').value;
    

    if (inputAgeVal < 18) {
      document.querySelector('#a-hard-truth').style.visibility = "visible"
    }
    else if (inputAgeVal >= 18) {
        document.querySelector('#a-hard-truth').style.visibility = "hidden"
    }

    
} 

const getPasswordInputValueLength = () => {
    
    let password = document.querySelector('#pwd').value
    // console.log(passwordConfirm)
    // console.log(password)

    if (password.length > 6) {
        password1.style.backgroundColor = "white"
    } 
    else if (password.length < 6) {
        password1.style.backgroundColor = "red"
    }
    else {
        password1.style.backgroundColor = "white"
    }
    
    
}
const getPasswordInputValueEqual = () => {
    
    let password = document.querySelector('#pwd').value
    let passwordConfirm = document.querySelector('#pwd-confirm').value
    // console.log(passwordConfirm)
    // console.log(password)

    if (password != passwordConfirm) {
        passwordConfirm2.style.backgroundColor = "red"

    } 
    else {
        passwordConfirm2.style.backgroundColor = "white"
    }
    
    
}
const changePageMode = () => {

    
}
let firstInput = document.querySelector('#firstname')

firstInput.addEventListener('keyup', () => {
    getNameInputValue()
})

// if the age is below 18 display the a-hard-truth section

let age = document.querySelector('#age')

age.addEventListener('keyup', () => {
    getAgeInputValue()
})

let password1 = document.querySelector('#pwd')
let passwordConfirm2 = document.querySelector('#pwd-confirm')

password1.addEventListener('keyup', () => {
    getPasswordInputValueLength()
    
})
password1.addEventListener('keyup', () => {
    getPasswordInputValueEqual()
})
passwordConfirm2.addEventListener('keyup', () => {
    getPasswordInputValueEqual()
})

// toggle dark and light mode 

const toggleChange = () => {
   document.body.style.backgroundColor = "black"
   document.body.style.color = "white"
    }

let toggle = document.querySelector('#toggle-darkmode')
// console.log(option1)
// console.log(option2)

toggle.addEventListener('change', () => {
    toggleChange()
})
