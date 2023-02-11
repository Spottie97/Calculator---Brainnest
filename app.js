let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');
let backspace = document.querySelector('.btn-backspace');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        if (value === "." && screen.value.includes(".")) {
            return;
        }
        screen.value += value;
    });
});

// Equal Button
equal.addEventListener('click', function(e){
    if(screen.value === ''){
        screen.value = '';
    } else {
        let answer = eval(screen.value);
        if (answer === Infinity) {
            screen.value = "Error: Don't divide by 0, it's rude.";
        } else {
            answer = Math.round(answer * 100) / 100;
            screen.value = answer;
        }
    }
});
//Backspace Button
backspace.addEventListener('click', function(e) {
    screen.value = screen.value.slice(0, -1);
});

// Clear Button
clear.addEventListener('click', function(e){
    screen.value = '';
});

//Keyboard Functionality
document.addEventListener('keydown', function(e) {
    let key = e.key;
    if (!isNaN(key)) {
        screen.value += key;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        screen.value += key;
    } else if (key === '.' && !screen.value.includes(".")) {
        screen.value += key;
    } else if (key === 'Backspace') {
        screen.value = screen.value.slice(0, -1);
    } else if (key === 'Enter') {
        let answer = eval(screen.value);
        if (answer === Infinity) {
            screen.value = "Error: Don't divide by 0, it's rude.";
        } else {
            answer = Math.round(answer * 100) / 100;
            screen.value = answer;
        }
    }
});