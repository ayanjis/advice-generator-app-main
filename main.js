async function getData () {
    const promise = await fetch(`https://api.adviceslip.com/advice`)
    return await promise.json()
}

const result = await getData()
let randomAdvice = result.slip.advice
let randomAdviceID = result.slip.id
console.log(randomAdvice)

const Advice_Id = document.getElementById('Advice_Id')
const Dice_Box = document.getElementById('Dice_Box')
const Advice_Text = document.getElementById('Advice_Text')

Dice_Box.addEventListener('click', () => {
    Advice_Id.innerText = randomAdviceID
    Advice_Text.innerText = randomAdvice
})