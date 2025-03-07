
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',this.window.scrollY > 0)
})

var btn = document.querySelector(".button");


