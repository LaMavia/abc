console.log('https://www.youtube.com/watch?v=Cvt98tMVbHk')
const factorial = (n) => {
if(n===0) return 1
else return n * factorial(n - 1)
}
const rand = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min) + min)
}
const rgb = () => {
  const color = `rgb(${rand(255,50)},${rand(255,50)},${rand(255,50)})`
  document.body.style.setProperty('--rgb', color)
}
rgb()
setInterval(rgb, 2000)
const defColor = '#ffffff',
  wrColor = '#ff0000',
  corColor = '#00ff50'

let letters = 'a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż'.split(" ")
let rLetter = 'c'
let randLetters = []
const handleClick = function(e: any): void {
  (this as HTMLElement)
  if (this.innerHTML === rLetter) console.log('proper'), reset(), points++
  else this.disabled = true
}
let points = 0
let lvl = points + 2 * 1
const updateLvl = (toAdd: number = 0) => {
  lvl = points + 2 + toAdd
}
let pads = document.querySelectorAll('.pad') as any

pads.forEach(pad => pad.addEventListener('click', handleClick))
const initPad = (amount: number) => {
  let outPoint = document.querySelector('.game')
  for (let i = 0; i < amount; i++) {
    let newPad = document.createElement('button')
    newPad.classList.add('pad')
    outPoint.appendChild(newPad)
    newPad.addEventListener('click', handleClick)
    pads.forEach(p => {
      p.removeEventListener('click', handleClick)
    })
    pads = document.querySelectorAll('.pad')
    pads.forEach(p => {
      p.addEventListener('click', handleClick)
    })
  }
  console.log(pads.length)
}
const reset = (): void => {
  updateLvl()
  if(!(lvl % 6)) initPad(1)
  document.body.style.setProperty('--pads-amount',pads.length)
  const isInArr = (item, arr: any[]) => {
    let found = false,
      i = 0
    while (!found && i < arr.length) {
      found = arr[i] === item ? true : false
      i++
    }
    return found
  }
  randLetters = []
  while (randLetters.length < pads.length) {
    let r = rand(letters.length)
    if (!isInArr(letters[r], randLetters)) randLetters.push(letters[r])
  }
  pads.forEach((p, i) => {
    p.innerHTML = randLetters[i]
    p.disabled = false
  })
  rLetter = randLetters[rand(pads.length)]
  const speech = new SpeechSynthesisUtterance(rLetter)
  window.speechSynthesis.speak(speech)
}
reset()