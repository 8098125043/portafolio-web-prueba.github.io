const toogleTheme = document.getElementById('togle-theme');
const toogleIcon = document.getElementById("togle-icon");
const toogleTex = document.getElementById("togle-text");


//toogle interruptor de si tiene o no tiene la clase si la tiene la quita si no la asigna.

toogleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');

    if(toogleIcon.src.includes("moon.svg")){

        toogleIcon.src='./assets/icons/sun.svg';
        toogleTex.textContent="Ligth Mode";

    }
    else{
        toogleIcon.src= './assets/icons/moon.svg';
        toogleTex.textContent="Dark Mode";
    }
})