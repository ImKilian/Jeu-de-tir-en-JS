'use strict'

//recup elements html
let container = document.querySelector(".container");
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function() {
    let score = 0
    let time = 30
    container.innerHTML = ""

    let interval = setInterval(function showTarget() {
        // cible
        let target = document.createElement('img')
        target.id = "target"
        target.src="cible2.png"
        container.appendChild(target)
        target.style.top = Math.random() * (600 - target.offsetHeight) + 'px'
        target.style.left = Math.random() * (900 - target.offsetWidth) + 'px'

        // faire disparaitre la cible
        setTimeout(function() {
            target.remove()
        }, 2000)

        // au moment du click
        target.onclick = function() {
            score += 1
            target.style.display = 'none'
        }
        time -= 1

        scoreContainer.innerHTML = `Score : ${score}`
        timeContainer.innerHTML = `Temps : ${time}`

        // fin du jeu, temps écoulé
        if(time == 0) {
            clearInterval(interval)
            container.innerHTML = 'Le temps est écoulé !'
        }
    }, 1000)
}
