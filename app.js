// $color-light: rgb(232,230,227);
// $color-dark: rgb(49,52,54);
// $color-primary: rgb(233, 130, 39);


const formLabel = document.querySelectorAll('.form__label');
const formControl = document.querySelectorAll('.form__control');
const form = document.querySelector('.form');

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sunPseudo = document.querySelector('.sunPseudo');
const moonPseudo = document.querySelector('.moonPseudo');



sunPseudo.addEventListener('click', () => {
    if(!sun.classList.contains('arc-out-sun')){
        sun.classList.toggle('arc-out-sun');
        moon.classList.toggle('arc-in-moon');
    } else {
        moon.classList.toggle('arc-out-moon');
        sun.classList.toggle('arc-in-sun');
    }
    
})

moonPseudo.addEventListener('click', () => {
    moon.classList.toggle('arc-out-moon');
    sun.classList.toggle('arc-in-sun');
})

formControl.forEach((control)=>{
    control.addEventListener('focus', (e) => {
        e.target.previousElementSibling.style.color = '#e98227'
    })
    control.addEventListener('blur', (e) => {
        console.dir(e.target.previousElementSibling.style.color);
        e.target.previousElementSibling.style.color = ''
    })
})

form.addEventListener('submit', (e) => {
    // console.dir(e.path[0][0].value)
    console.dir(e.target)

})

