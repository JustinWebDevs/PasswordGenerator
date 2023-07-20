let upper = document.getElementById('upper');
let lower = document.getElementById('lower');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let password = document.getElementById('password');
let charLenght = document.getElementById('charLenght'); 
let generate = document.getElementById('generate');
let valueRange = document.getElementById('valueRange');
let copy = document.getElementById('copy');
let alertInfo = document.getElementById('alertInfo');
let alertError = document.getElementById('alertError');
let alertChar = document.getElementById('alertChar')

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

    let passText = "password";
    passText = passText.split('');

    if (upper.checked) {
        passText[0] = 'P';
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

    strengRange()
}

const valueStrength = (charQty) => {
    let plusValue = 1;

    upper.checked ? plusValue++ : null;
    lower.checked ? plusValue++ : null;
    numbers.checked ? plusValue++ : null;
    symbols.checked ? plusValue++ : null;

    plusValue > 1 ? plusValue-- : null;

    let dificult1 = document.getElementById('dificult1');
    let dificult2 = document.getElementById('dificult2');
    let dificult3 = document.getElementById('dificult3');
    let dificult4 = document.getElementById('dificult4');
    let strDificult = document.getElementById('strDificult');

    let strength = (charQty * plusValue);

    if (strength < 20) {
        dificult1.className = 'veryEasy item';
        dificult2.className = 'item';
        dificult3.className = 'item';
        dificult4.className = 'item';
        strDificult.innerHTML = 'VERY EASY';
    }else if(strength < 30){
        dificult1.className = 'easy item';
        dificult2.className = 'easy item';
        dificult3.className = 'item';
        dificult4.className = 'item';
        strDificult.innerHTML = 'EASY'
    }else if(strength < 40){
        dificult1.className = 'medium item';
        dificult2.className = 'medium item';
        dificult3.className = 'medium item';
        dificult4.className = 'item';
        strDificult.innerHTML = 'MEDIUM'
    }else if (strength >= 40){
        dificult1.className = 'hard item';
        dificult2.className = 'hard item';
        dificult3.className = 'hard item';
        dificult4.className = 'hard item';
        strDificult.innerHTML = 'HARD'
    }
}

upper.addEventListener('click', changeMainText);
lower.addEventListener('click', changeMainText);
numbers.addEventListener('click', changeMainText);
symbols.addEventListener('click', changeMainText);

generate.addEventListener('click', ()=>{
    if (upper.checked || lower.checked || numbers.checked || symbols.checked){
        generatePassword();
    }else{
        alertCharacters();
    }
});

charLenght.addEventListener('input', strengRange);

function strengRange(){
    valueRange.innerText = charLenght.value;
    valueStrength(charLenght.value);
}

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(password.value).then(function() {
            alertInfo.classList.remove('hide');
            alertInfo.classList.add('show');
            setTimeout(()=>{
                alertInfo.classList.remove('show');
                alertInfo.classList.add('hide');
            }, 2000);
      }, function() {
        alertError.classList.remove('hide');
        alertError.classList.add('show');
        setTimeout(()=>{
            alertError.classList.remove('show');
            alertError.classList.add('hide');
        }, 2000);
      });
});

function closeAlert(){
    alertInfo.classList.remove('show');
    alertInfo.classList.add('hide');
}

function alertCharacters(){
    alertChar.classList.remove('hide');
    alertChar.classList.add('show');
    
    setTimeout(()=>{
        alertChar.classList.remove('show');
        alertChar.classList.add('hide');
    }, 2000);
}

function closeAlertError(){
    alertError.classList.remove('show');
    alertError.classList.add('hide');
}

function closeAlertChar(){
    alertChar.classList.remove('show');
    alertChar.classList.add('hide');
}