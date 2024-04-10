let number = Math.round(Math.random() * 100);
let firstTryPassed = false;
let WrongOrCorrect = 0;
let isFound = false;
let PWithTryes;
let visual;
let hint;
let NewGameButton = document.createElement('button');
NewGameButton.id = 'NewGame';

function AfterFirstTry() {
    PWithTryes = document.createElement('p');
    PWithTryes.id = 'Tries';
    PWithTryes.textContent = 'Previous guesses: ';
    document.body.append(PWithTryes);
    hint = document.createElement('p');
    visual = document.createElement('p');
}

function WrongOrCorrectCheck() {
    if(isFound) {
        visual.textContent = 'Correct';
        visual.style.backgroundColor = 'lightgreen';
    }
    else {
        visual.textContent = 'Wrong';
        visual.style.backgroundColor = 'red';
    }
    document.body.append(visual);
}

function Found() {
    NewGameButton.textContent = 'NewGame';
    document.body.append(NewGameButton);
    NewGameButton.style.display = 'block';
    NewGameButton.onclick = NewGame;
}

function NewGame() {
    PWithTryes.textContent = "";
    visual.textContent = "";
    hint.textContent = "";
    number = Math.round(Math.random() * 100);
    guessedNumber = 0;
    let NewGameButton = document.getElementById('NewGame');
    NewGameButton.style.display = 'none';
}

document.getElementById('Submit').onclick = () => {
    if(!firstTryPassed) {
        AfterFirstTry();
    }
    firstTryPassed = true;

    let guessedNumber = document.getElementById('TextField').value;
    if(guessedNumber < number) {
        hint.textContent = 'Last guess was too low!';
        isFound = false;
    }
    else if(guessedNumber > number) {
        hint.textContent = 'Last guess was too high!';
        isFound = false;
    }
    else {
        hint.textContent = 'Congratulation! You found it.';
        isFound = true;
        Found();
    }
    WrongOrCorrectCheck();
    let stringa = document.getElementById('Tries');
    let text = stringa.textContent;
    text = text+" "+guessedNumber;
    stringa.textContent = text;
    document.body.append(hint);
}

