/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
    scrollIndicator();
}

function scrollIndicator() {
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}


// Récupérer tous les éléments span qui contiennent le pourcentage de compétence
var spans = document.querySelectorAll('.progress-bar .progress h3 span');

// Parcourir tous les éléments span
for (var i = 0; i < spans.length; i++) {
    // Récupérer la valeur de pourcentage
    var percentage = parseInt(spans[i].textContent);

    // Récupérer la barre de progression correspondante
    var bar = spans[i].parentNode.nextElementSibling.firstElementChild;

    // Définir la largeur de la barre de progression
    bar.style.width = percentage + '%';
}