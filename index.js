console.log('Hi ;)');
var rand = function (max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min) + min);
};
var defColor = '#ffffff', wrColor = '#ff0000', corColor = '#00ff50';
var letters = 'a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż'.split(" ");
var rLetter = 'c';
var randLetters = [];
var handleClick = function (e) {
    if (this.innerHTML === rLetter)
        console.log('proper'), reset();
    else
        console.log('wrong');
};
var pads = document.querySelectorAll('.pad');
pads.forEach(function (pad) { return pad.addEventListener('click', handleClick); });
var reset = function () {
    var isInArr = function (item, arr) {
        var found = false, i = 0;
        while (!found && i < arr.length) {
            found = arr[i] === item ? true : false;
            i++;
        }
        return found;
    };
    randLetters = [];
    while (randLetters.length < 3) {
        var r = rand(letters.length);
        if (!isInArr(letters[r], randLetters))
            randLetters.push(letters[r]);
    }
    pads.forEach(function (p, i) {
        p.innerHTML = randLetters[i];
    });
    rLetter = randLetters[rand(3)];
    var speech = new SpeechSynthesisUtterance(rLetter);
    window.speechSynthesis.speak(speech);
};
reset();
