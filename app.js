let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

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

clear.addEventListener('click', function(e){
    screen.value = '';
});


