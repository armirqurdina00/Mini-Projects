const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')
const toggleBtn = document.querySelector('.sidebar-toggle-btn')

closeBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-bar')
})

toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-bar')
})