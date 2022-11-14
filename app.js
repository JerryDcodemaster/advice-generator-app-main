const adviceButton = document.getElementById('icon-dice');
const adviceTexts = document.getElementById('advice');
const idNumbers = document.getElementById('no-id');

adviceButton.addEventListener('click', generateAdvice);

function generateAdvice() {
    const output = '';

    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
            console.log(data.slip)
            idNumbers.innerText = `#${data.slip.id}`
            adviceTexts.innerText = data.slip.advice;
        }
    )
    .catch(err => console.log(err))
}