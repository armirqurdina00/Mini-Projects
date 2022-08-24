const reviews = [
    {
        id: 1,
        img: "img/pic1.jpg",
        author: "Joe Taylor",
        job: "Web Developer",
        info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."'
    },

    {
        id: 2,
        img: "img/pic2.jpg",
        author: "Susan Smith",
        job: "UX Designer",
        info: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
        id: 3,
        img: "img/pic3.jpg",
        author: "Anna Johnson",
        job: "Data Analyst",
        info: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."'
    },
    {
        id: 4,
        img: "img/pic4.jpg",
        author: "Sara Jones",
        job: "Intern",
        info: '"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."'
    }
]

const img = document.getElementById("img");
const author = document.querySelector(".author")
const job = document.querySelector(".job")
const info = document.querySelector(".info")

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.querySelector('.random-btn')


let index = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
})

nextBtn.addEventListener('click', function(){
    index++;
    if(index > reviews.length-1) index = 0;
    showPerson()
})

prevBtn.addEventListener('click', function(){
    index--;
    if(index < 0) index = reviews.length-1;
    showPerson()
})

randomBtn.addEventListener('click', function(){
    index = Math.floor(Math.random() * reviews.length);
    showPerson()
})

function showPerson(){
    const item = reviews[index];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

