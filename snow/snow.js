'use strict';

const createSnow = (n) => {
    const count = 4
    let i = 1

    const style = document.createElement('style')
    style.textContent = `
        body {
            position: relative;
        }

        .snow {
            position: fixed;
            background-color: aqua;
            width: 20px;
            height: 20px;
            top: -20px;
            pointer-events: none;
            border-radius: 50%;
            animation: fall linear 5s;
            background-repeat: no-repeat;
            z-index: 100;
        }

        @keyframes fall {
            100% {
                transform: translateY(100vh);
            }
        }

    `
    document.head.append(style)

    const createSnowFlake = () => {
        const snow = document.createElement('div')
        snow.classList.add('snow')

        i += 1
        if (i > count) i = 1

        const size = i * 10

        snow.style.left = Math.random() * window.innerWidth + 'px'
        snow.style.opacity = Math.random()
        snow.style.animationDuration = (Math.random() + n + 2) + 's'
        snow.style.width = size + 'px'
        snow.style.height = size + 'px'

        document.body.append(snow)

        setTimeout(() => {
            snow.remove()
        }, (n + 2) * 1000)
    }

    setInterval(createSnowFlake, 100)
}

createSnow(3)