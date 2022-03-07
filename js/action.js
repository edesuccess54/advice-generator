const dice = document.querySelector('.activate');
const advice_no = document.querySelector('.number');
const quote = document.querySelector('.quote');


const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const {id,advice } = data.slip;
    
    
    quote.innerHTML = advice;
    advice_no.innerHTML = id;
}

window.addEventListener('load', () => {
    getAdvice();
})


dice.addEventListener('click', () => {
    if(!dice.classList.contains('spin-right')) {
        dice.classList.add('spin-right');
    } else {
        dice.classList.remove('spin-right');
        dice.classList.add('spin-left');
    }
    getAdvice();
});
