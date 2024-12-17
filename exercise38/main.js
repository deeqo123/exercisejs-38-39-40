const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');

const sections = dodument.querySelectorAll(".sections");


toggleButton.addEventListener("click", function(){
    navbar.classList.toggle('active');
});

