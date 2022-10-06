const form = {
    userName: document.getElementById('userName'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    button: document.querySelector('.button'),
    inputs: document.querySelectorAll('input'),
    error: document.querySelector('.input-error'),
    fail: document.querySelector('.input-fail'),
    bad: document.querySelector('.input-error-fail')
}

// const validate = {
//     validateEmail: (key, value) => {
//         const { value } = form.email.getElementsByTagName('input')[0]
//         const v = form.email.getElementsByTagName('input')
//         const reg = /[a-z]{2,20}@[a-z]{2,10}\.[a-z]{2,4}/
    
//         if (reg.test(value)) {
//             alert('Form submitted successfully')
//             form.email.classList.remove('error')
//             form.error.classList.remove('view')
//         } else if (v.length <= inputsLength) {
//             form.button.classList.add('disable')
//             form.email.classList.add('error')
//             form.error.classList.add('view')
//         }
        
//     }
// }

const inputsLength = form.inputs.length + 2

// let eventOnSubmit = (e) => {
//     let formIsValid = true;


//     let validate = document.querySelectorAll('.validation')
//     validate.forEach((element) => {
//         let elementDataSet = element.dataset;

//         elementDataSet.forEach((element, key) => {
//             let functionName = 'validate' + key.upperCase[0];
//             if (typeof validate[functionName] === 'function') {
//                 let isValidate = validate[functionName](data.value, inputValue)
//                 if (isValidate !== true) {
//                     input.innerHTML = `isValidate`
//                     formIsValid = false
//                 }
//             }
//         })
//     })
//     if (formIsValid) {
//         // show pop app submit
//     }
    
// }

function checkForm() {
    const userName = form.userName.getElementsByTagName('input')[0].value
    const email = form.email.getElementsByTagName('input')[0].value
    const phone = form.phone.getElementsByTagName('input')[0].value

    if (userName && email && phone) {
        form.button.classList.remove('disable')
    } else {
        form.button.classList.add('disable')
    }
}

function handleInput(e, name) {
    const { value } = e.target

    if (value) {
        form[name].classList.add('filed') 
    } else {
        form[name].classList.remove('filed')
    }
    checkForm()
}

function validateEmail(e) {
    const { value } = form.email.getElementsByTagName('input')[0]
    const reg = /[a-z]{2,20}@[a-z]{2,10}\.[a-z]{2,4}/
    
    if (reg.test(value)) {
        alert('Form submitted successfully')
        form.email.classList.remove('error')
        form.error.classList.remove('view')
    } else if (value.length <= inputsLength) {
        form.button.classList.add('disable')
        form.email.classList.add('error')
        form.error.classList.add('view')
    }
    validateMore()
    validateNumber()
}



function validateMore(e) {
    const { value } = form.userName.getElementsByTagName('input')[0]

    if (value.length >= inputsLength) {
        form.userName.classList.remove('fail')
        form.fail.classList.remove('kind')
    } else if (value.length <= inputsLength) {
        form.button.classList.add('disable')
        form.userName.classList.add('fail')
        form.fail.classList.add('kind')
    }
}

function validateNumber(e) {
    const { value } = form.phone.getElementsByTagName('input')[0]

    if (value.length >= inputsLength) {
        form.phone.classList.remove('bad')
        form.bad.classList.remove('sort')
    } else if (value.length <= inputsLength) {
        form.button.classList.add('disable')
        form.phone.classList.add('bad')
        form.bad.classList.add('sort')
    }
}




form.userName.oninput = (e) => handleInput(e, 'userName')
form.email.oninput = (e) => handleInput(e, 'email')
form.phone.oninput = (e) => handleInput(e, 'phone')
form.button.onclick = validateEmail
