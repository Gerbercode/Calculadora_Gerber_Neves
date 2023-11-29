
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const showResult = document.querySelector('.show-result');
const buttons = document.querySelectorAll('.buttons');
let inputValue = '';
let result = '';



Array.from(buttons).forEach((button) => {
button.addEventListener('click', (e) => {
const input = e.target.innerText;
// Slicing last character from existing input value


const char = inputValue.toString().slice(inputValue.length - 1, inputValue.length);
        // Peventing user to input operators and special character multiple times unnecessarily  // Starting
        
        
        if ((char == '%' || char == '/' || char == '×' || char == '-' || char == '+' || char == '.') && (input == '%' || input == '÷' || input == '×' || input == '-' || input == '+' || input == '.')) {
        
        
            if (input == '÷') {
                inputValue = inputValue.slice(0, -1) + '/';
            } else if (input == '×') {
            
            
                inputValue = inputValue.slice(0, -1) + '*';
            } else { inputValue = inputValue.slice(0, -1) + input; };
            
            
        // Preventing user from adding parenthesis after '.'(dot) and multiple parenthesis unnecessarily
        
        
        } else if ((char == '.' || char == '(' || char == ')') && (input == '(' || input == ')')) {
        
            inputValue = inputValue.slice(0, -1) + input; //End
        }else { // Funcionalidades básicas 
            if (input == 'AC') {
                inputValue = '';
                result = '';
                
                
            } else if (input == '←') {
                if (result) {
                    inputValue = result;
                    result = '';
                } 
                
                else {
                    inputValue = inputValue.slice(0, -1);
                };
            } else if (input == '÷') {
                inputValue += '/';
            } else if (input == '×') {
                inputValue += '*';
            } else {
                inputValue += input;
            };
        };
        result = '';
        display1.innerText = result;
        display2.innerText = inputValue;
    });
});



showResult.addEventListener('click', () => {
    try {
        result = inputValue;
        inputValue = eval(inputValue);
        display1.innerText = result + ' =';
        display2.innerText = inputValue;
    } catch (error) {
        display2.innerText = 'erro,valor não definido...';
    };
});
