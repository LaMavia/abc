console.log('https://www.youtube.com/watch?v=Cvt98tMVbHk');
var factorial = function (n) {
    if (n === 0)
        return 1;
    else
        return n * factorial(n - 1);
};
var rand = function (max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min) + min);
};
var rgb = function () {
    var color = "rgb(" + rand(255, 50) + "," + rand(255, 50) + "," + rand(255, 50) + ")";
    document.body.style.setProperty('--rgb', color);
};
rgb();
setInterval(rgb, 2000);
var defColor = '#ffffff', wrColor = '#ff0000', corColor = '#00ff50';
var letters = 'a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż'.split(" ");
var rLetter = 'c';
var randLetters = [];
var handleClick = function (e) {
    this;
    if (this.innerHTML === rLetter)
        console.log('proper'), reset(), points++;
    else
        this.disabled = true;
};
var points = 0;
var lvl = points + 2 * 1;
var updateLvl = function (toAdd) {
    if (toAdd === void 0) { toAdd = 0; }
    lvl = points + 2 + toAdd;
};
var pads = document.querySelectorAll('.pad');
pads.forEach(function (pad) { return pad.addEventListener('click', handleClick); });
var initPad = function (amount) {
    var outPoint = document.querySelector('.game');
    for (var i = 0; i < amount; i++) {
        var newPad = document.createElement('button');
        newPad.classList.add('pad');
        outPoint.appendChild(newPad);
        newPad.addEventListener('click', handleClick);
        pads.forEach(function (p) {
            p.removeEventListener('click', handleClick);
        });
        pads = document.querySelectorAll('.pad');
        pads.forEach(function (p) {
            p.addEventListener('click', handleClick);
        });
    }
    console.log(pads.length);
};
var reset = function () {
    updateLvl();
    if (!(lvl % 6))
        initPad(1);
    document.body.style.setProperty('--pads-amount', pads.length);
    var isInArr = function (item, arr) {
        var found = false, i = 0;
        while (!found && i < arr.length) {
            found = arr[i] === item ? true : false;
            i++;
        }
        return found;
    };
    randLetters = [];
    while (randLetters.length < pads.length) {
        var r = rand(letters.length);
        if (!isInArr(letters[r], randLetters))
            randLetters.push(letters[r]);
    }
    pads.forEach(function (p, i) {
        p.innerHTML = randLetters[i];
        p.disabled = false;
    });
    rLetter = randLetters[rand(pads.length)];
    var speech = new SpeechSynthesisUtterance(rLetter);
    window.speechSynthesis.speak(speech);
};
reset();
