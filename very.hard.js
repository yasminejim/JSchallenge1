

const num1 = parseFloat(prompt('Please enter first number: '));
const operator = prompt('Please enter operator ( either +, -, * or / ): ');
const num2 = parseFloat(prompt('Please enter second number: '));

switch(operator) {
    
    case '+':
        result = parsefloat(num1) + parsefloat(num2);
        console.log(`${num1} + ${num2} = ${result}`);
         break;

    case '-':
        result = parsefloat(num1) - parsefloat(num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;

    case '*':
        result = parsefloat(num1) * parsefloat(num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;

    case '/':
        result = parsefloat(num1) / parsefloat(num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log('No Value Found');
        break;
}