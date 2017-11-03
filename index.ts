console.log('https://www.youtube.com/watch?v=Cvt98tMVbHk')
const rand = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min) + min)
}
const rgb = () => {
  const color = `rgb(${rand(255,50)},${rand(255,50)},${rand(255,50)})`
  document.body.style.setProperty('--rgb', color)
}
rgb()
setInterval(rgb,2000)
const defColor = '#ffffff',
  wrColor = '#ff0000',
  corColor = '#00ff50'

let letters = 'a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż'.split(" ")
let rLetter = 'c'
let randLetters = []
const handleClick = function(e: any): void {
  (this as HTMLElement)
  if (this.innerHTML === rLetter) console.log('proper'), reset()
  else this.disabled = true
}

const pads = document.querySelectorAll('.pad') as any
pads.forEach(pad => pad.addEventListener('click', handleClick))

const reset = (): void => {
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
  while (randLetters.length < 3) {
    let r = rand(letters.length)
    if (!isInArr(letters[r], randLetters)) randLetters.push(letters[r])
  }
  pads.forEach((p, i) => {
    p.innerHTML = randLetters[i]
    p.disabled = false
  })
  rLetter = randLetters[rand(3)]
  const speech = new SpeechSynthesisUtterance(rLetter)
  window.speechSynthesis.speak(speech)
}
reset()