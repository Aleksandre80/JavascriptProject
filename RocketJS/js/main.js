'use strict';

var button = document.getElementById('firing-button');
var interval;

function timer10seconds() {
    var compteur = document.getElementById('timer');
    var secondes = parseInt(compteur.textContent || 11);
    var rocketImg = document.getElementById('rocket');
    rocketImg.src = 'images/rocket2.gif';
    button.classList.add('disabled');
    
    interval = setInterval(function () {
        secondes--;
        compteur.textContent = secondes;

        if (secondes <= 0) {
            clearInterval(interval);
            rocketImg.src = 'images/rocket3.gif';
            rocketImg.classList.add('tookOff');
        }
    }, 1000);
    resetButton();
    
}

function start() {
    button.addEventListener('click', timer10seconds);
}
start();

function reset(){
    var compteur = document.getElementById('timer');
    var rocketImg = document.getElementById('rocket');
    rocketImg.src = 'images/rocket1.png';
    rocketImg.classList.remove('tookOff');
    button.classList.remove('disabled');
    clearInterval(interval);
    compteur.textContent = 10;
}

function resetButton(){
    var resetButton = document.getElementById('cancel-button');
    resetButton.addEventListener('click', reset);
}


function createStars() {
    var body = document.body;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    for (var i = 0; i < 10000; i++) {
        var star = document.createElement('div');
        star.classList.add('star')
        star.classList.add('tiny');
        star.style.top = Math.random() * windowHeight + 'px'; // position aléatoire en Y
        star.style.left = Math.random() * windowWidth + 'px'; // position aléatoire en X

        body.appendChild(star);
    }

    for (var i = 0; i < 1000; i++) {
        var star = document.createElement('div');
        star.classList.add('star')
        star.classList.add('normal');
        star.style.top = Math.random() * windowHeight + 'px'; // position aléatoire en Y
        star.style.left = Math.random() * windowWidth + 'px'; // position aléatoire en X

        body.appendChild(star);
    }

    for (var i = 0; i < 1000; i++) {
        var star = document.createElement('div');
        star.classList.add('star')
        star.classList.add('big');
        star.style.top = Math.random() * windowHeight + 'px'; // position aléatoire en Y
        star.style.left = Math.random() * windowWidth + 'px'; // position aléatoire en X

        body.appendChild(star);
    }
}

createStars();
