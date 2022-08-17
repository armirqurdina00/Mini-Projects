let number = document.querySelector('.number');

let numberInt = parseInt(number.textContent)

const inc = document.querySelector('.inc')
const dec = document.querySelector('.dec')
const reset = document.querySelector('.reset')

inc.addEventListener('click', function(){
    numberInt++;
    number.textContent = numberInt.toString();
    colorChange();
})

reset.addEventListener('click', function(){
    numberInt = 0;
    number.textContent = numberInt.toString();
    colorChange();
})

dec.addEventListener('click', function(){
    numberInt--;
    number.textContent = numberInt.toString();
    colorChange();
})

function colorChange(){

    if(numberInt > 0){
        number.style.color = "green";
    }

    else if(numberInt < 0){
        number.style.color = "red";
    }

    else {
        number.style.color = "black";
    }

}