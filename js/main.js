const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    button.addEventListener('click', ()=> {
        if(value !== undefined){
            const lastChar = display.value.slice(-1);
            const operator = ['÷', '×', '-', '+', '.'];

            if(operator.includes(value) && operator.includes(lastChar)){
                return ;
            }

            display.value += value;
        }

        else if(action === 'clear'){
            display.value = '';
        }

        else if(action === 'backspace'){
            display.value = display.value.slice(0, -1);
        }

        else if(action === 'calculate'){
            try{
                const expression = display.value
                .replace(/×/g, '*')
                .replace(/÷/g, '/');

                
                let result = eval(expression);

                if (result % 1 !== 0) {
                    result = result.toFixed(3);
                }

                display.value = result;
            }
            catch{
                display.value = 'Error';
            }
        }
    })
});