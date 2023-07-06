let upper = document.getElementById('upper');
let lower = document.getElementById('lower');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let password = document.getElementById('password');
let charLenght = document.getElementById('charLenght'); 
let generate = document.getElementById('generate');
let valueRange = document.getElementById('valueRange');

const generatePassword = () => {
    let upperCharaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCharaters = 'abcdefghijklmnopqrstuvwxyz';
    let numbersCharaters = '0123456789';
    let symbolsCharaters = '!@#$%^&*()_+-=[]{};:"|,.<>/?';
    
    let generatedPassword = '';
    let char = '';
    let i = 0;
    while (generatedPassword.length < charLenght.value) {

        if (i % 5 === 0) {
            if (symbols.checked){
                char = symbolsCharaters.charAt(Math.floor(Math.random() * symbolsCharaters.length));
            }else{
                i++;
                continue;
            }
        } else if (i % 4 === 0) {
            if (numbers.checked){
                char = numbersCharaters.charAt(Math.floor(Math.random() * numbersCharaters.length));
            }else{
                i++
                continue;
            }
        } else if (i % 3 === 0) {
            if (upper.checked){
                char = upperCharaters.charAt(Math.floor(Math.random() * upperCharaters.length));
            }else{
                i++;
                continue;
            }
        } else if (i % 2 === 0) {
            if (lower.checked){
                char = lowerCharaters.charAt(Math.floor(Math.random() * lowerCharaters.length));
            }else{
                i++;
                continue;
            }
        }else{
            i++;
            continue;
        }

        generatedPassword += char;
        i++;
    }
    
    password.value = generatedPassword;
}

const changeMainText = () => {

    let passText = "Password";
    passText = passText.split('');

    if (upper.checked) {
        passText[1] = 'A';
        passText[2] = 'S';
        passText[3] = 'S';
        passText[4] = 'W'; 
        passText[5] = 'O'; 
        passText[6] = 'R'; 
        passText[7] = 'D'; 
    }

    if (lower.checked) {
        passText[4] = 'w'; 
        passText[6] = 'r'; 
    }

    if (numbers.checked){
        passText[1] = '4';
        passText[3] = '5';
        passText[5] = '0';
    }

    if (symbols.checked){
        passText[2] = '$';
        passText[8] = '!';
    }
    passText = passText.join('');

    password.setAttribute('placeholder', passText);

}

upper.addEventListener('click', changeMainText);
lower.addEventListener('click', changeMainText);
numbers.addEventListener('click', changeMainText);
symbols.addEventListener('click', changeMainText);
generate.addEventListener('click', ()=>{
    if (upper.checked || lower.checked || numbers.checked || symbols.checked){
        generatePassword();
    }else{
        alert('debe seleccionar un tipo de caracter');
    }
});

charLenght.addEventListener('input', () => {
    valueRange.innerText = charLenght.value;
});