const input = document.querySelector('.calculator__input');
const buttons = document.querySelector('.calculator__buttons');
const previousProblem = document.querySelector('.calculator__previous-problem')

buttons.addEventListener('click', function(e){
    switch (e.target.innerText) {
        case 'AC':
            input.setAttribute('value', "");
            if (previousProblem.innerText){
                previousProblem.innerText = "";
            };
            break;
        case '+/-':
            //fix logic
            input.setAttribute('value', !(input.value));
            break;
        case '%':
            //fix logic
            input.setAttribute('value', `${input.value}%`);
            break;
        case '/':
            operationClickedFirst();
            if (hasPreviousOperator(input.value)){
                break;
            };
            input.setAttribute('value', `${input.value} /`);
            break;
        case '7':
            input.setAttribute('value', `${input.value}7`);
            break;
        case '8':
            input.setAttribute('value', `${input.value}8`);
            break;
        case '9':
            input.setAttribute('value', `${input.value}9`);
            break;
        case 'X':
            operationClickedFirst();
            if (hasPreviousOperator(input.value)){
                break;
            };
            input.setAttribute('value', `${input.value}*`);
            break;
        case '4':
            input.setAttribute('value', `${input.value}4`);
            break;
        case '5':
            input.setAttribute('value', `${input.value}5`);
            break;
        case '6':
            input.setAttribute('value', `${input.value}6`);
            break;
        case '-':
            operationClickedFirst();
            if (hasPreviousOperator(input.value)){
                break;
            };
            input.setAttribute('value', `${input.value}-`);
            break;
        case '1':
            input.setAttribute('value', `${input.value}1`);
            break;
        case '2':
            input.setAttribute('value', `${input.value}2`);
            break;
        case '3':
            input.setAttribute('value', `${input.value}3`);
            break;
        case '+':
            operationClickedFirst();
            if (hasPreviousOperator(input.value)){
                break;
            };
            input.setAttribute('value', `${input.value}+`);
            break;
        case '0':
            input.setAttribute('value', `${input.value}0`);
            break;
        case '.':
            operationClickedFirst();
            if (hasPreviousDecimal()){
                break;
            };
            if (hasPreviousOperator(input.value)){
                input.setAttribute('value', `${input.value}0`)
            }
            input.setAttribute('value', `${input.value}.`);
            break;
        case '=':
            if (input.value==='') break;
            endsInDecimal()
            previousProblem.innerText = input.value;
            input.setAttribute('value', eval(input.value));
            break;
        
    };
});

function hasPreviousOperator(string){
    return (string[string.length-1]==='/' || string[string.length-1]==='*' || string[string.length-1]==='-' || string[string.length-1]==='+');
};

function hasPreviousDecimal(){
    return input.getAttribute('value')[input.getAttribute('value').length-1]==='.';
}

function operationClickedFirst(){
    if (input.value==="") input.setAttribute('value', 0);
    return
}

function endsInDecimal(){
    let string = input.getAttribute("value");
    if (string[string.length-1]==='.'){
        input.setAttribute("value", `${string.substring(string, string.length-1)}`)
    };
    return
}



/*
1.(done) set conditions to make sure user can't enter consecutive math operations
2. set conditions on plus/minus and percentage to add or remove one of these at a time
3. 
*/