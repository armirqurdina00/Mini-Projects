const colors = ["green", "red", "blue", "yellow", "orange"]
const btn = document.querySelector(".btn");
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}