// $color-light: rgb(232,230,227);
// $color-dark: rgb(49,52,54);
// $color-primary: rgb(233, 130, 39);

const root = document.documentElement;
const formControls = document.querySelectorAll('.form__control');
const form = document.querySelector('.form');

const nameInput = document.querySelector('#name')
const password1Input = document.querySelector('#password1')
const password2Input = document.querySelector('#password2')
const emailInput = document.querySelector('#email')

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sunPseudo = document.querySelector('.sunPseudo');
const moonPseudo = document.querySelector('.moonPseudo');

let click = new Event("click");

const odinLogoImg = document.querySelector('.odinLogo__img');

const checkPasswords = () => {
    let password1Value = password1Input.value;
    let password2Value = password2Input.value;
    
    if(!password2Value){
        password1.style.border = '1px solid green';
        password1.previousElementSibling.style.color = 'green'
    } else if (password1Value != password2Value) {
        password1.style.border = '1px solid red';
        password1.previousElementSibling.style.color = 'red'
        password2.style.border = '1px solid red';
        password2.previousElementSibling.style.color = 'red'
    } else {
        password1.style.border = '1px solid green';
        password1.previousElementSibling.style.color = 'green'
        password2.style.border = '1px solid green';
        password2.previousElementSibling.style.color = 'green'
    }
}



sunPseudo.addEventListener('click', () => {
    if(!sun.classList.contains('arc-out-sun')){
        sun.classList.toggle('arc-out-sun');
        moon.classList.toggle('arc-in-moon');
    } else {
        moon.classList.toggle('arc-out-moon');
        sun.classList.toggle('arc-in-sun');
    }

    sunPseudo.classList.toggle('fade-out');
    moonPseudo.classList.toggle('fade-in');

    root.classList.add('night-mode');
    console.log('clicked');
})



moonPseudo.addEventListener('click', () => {
    moon.classList.toggle('arc-out-moon');
    sun.classList.toggle('arc-in-sun');
    
    sunPseudo.classList.toggle('fade-out');
    moonPseudo.classList.toggle('fade-in');

    root.classList.remove('night-mode');

})

formControls.forEach((control)=>{
    control.addEventListener('focus', (e) => {

        if(e.target.style.borderColor != 'red' && e.target.style.borderColor != 'green'){
            
            if(!root.classList.contains('night-mode')){
                e.target.previousElementSibling.style.color = '#e98227';
            } else {
                e.target.previousElementSibling.style.color = '#4700b3';
            }
        
        }
        
    })
    control.addEventListener('blur', (e) => {
        if(e.target.style.borderColor != 'red' && e.target.style.borderColor != 'green'){
            e.target.previousElementSibling.style.color = ''
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formControls.forEach(control => {
        if(!control.value){
            control.style.border = '1px solid red';
            control.previousElementSibling.style.color = 'red'
        }
    })
})

formControls.forEach(control => {
    control.addEventListener('input', () => {
        if(control.value){
            control.style.border = '1px solid green';
            control.previousElementSibling.style.color = 'green'
        } else {
            control.style.border = '1px solid red';
            control.previousElementSibling.style.color = 'red'
        }
    })
})

password1Input.addEventListener('input', () => {
    checkPasswords();
})

password2Input.addEventListener('input', () => {
    checkPasswords();
})

emailInput.addEventListener('input', () => {
    let inputValue = emailInput.value;
    console.log(inputValue)
    if (/@\w*(.com|.ca|.org)/.test(inputValue) === false){          // regular expressions are cool
        emailInput.style.border = '1px solid red';
        emailInput.previousElementSibling.style.color = 'red'
    }
})



let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(matched){
    console.log('Currently in dark mode');
    root.classList.add('night-mode');
    sunPseudo.dispatchEvent(click);
} else{
	console.log('Currently not in dark mode');
}


// Checking screen resize and throttling event listener


// let isSmallWindow = window.matchMedia('only screen and (max-width: 930px)');

// let throttled = false;
// let delay = 1000;


// const checkWindowSize = () => {
//     if(isSmallWindow.matches) {
//         console.log('hooray!');
//         odinLogoImg.src = "./odinLogo-dark.svg"
//     } else {
//         odinLogoImg.src = "./odinLogo.svg"
//     }
// }
  
// // window.resize event listener
// window.addEventListener('resize', () => {
// // only run if we're not throttled
// if (!throttled) {
//     // actual callback action
//     checkWindowSize();
//     // we're throttled!
//     throttled = true;
//     // set a timeout to un-throttle
//     setTimeout(function() {
//     throttled = false;
//     }, delay);
// }  
// });
  



