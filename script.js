import i18Obj from '../../assets/modules/translate.js'

let proj = [],
    isMenuOpen = 0,
    widthP

const transWords = document.querySelectorAll('[data-i18]')

const   body = document.querySelector('body'),
        projOrig = document.querySelectorAll('.proj'),
        channel = document.querySelector('.channel'),
        burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        burgerBg = document.querySelector('.burger-bg'),
        home = document.querySelector('.home'),
        span = document.querySelector('.YBspan'),
        lang = document.querySelector('.lang')

projOrig.forEach(e => {
    proj.push(e)
})
proj.push(channel)

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////burger menu////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

burger.addEventListener('click', function() {
    let result = isMenuOpen === 0 ? menuOn() : menuOff()
})
menu.addEventListener('click', function() {
    if (isMenuOpen === 1) {
        menuOff()
    }
})

home.addEventListener('click', function() {
    if (isMenuOpen === 1) {
        menuOff()
    }
})

burgerBg.addEventListener('click', function() {
    if (isMenuOpen === 1) {
        menuOff()
    }
})

function menuOff() {
    menu.style.right = '-130px'
    burgerBg.style.opacity = '0'
    burgerBg.style.zIndex = '0'
    burger.style.backgroundImage = "url('../../assets/images/burger.png')"
    isMenuOpen = 0
}

function menuOn() {
    menu.style.right = '0'
    burgerBg.style.opacity = '0.6'
    burgerBg.style.zIndex = '9'
    burger.style.backgroundImage = "url('../../assets/images/cross.png')"
    isMenuOpen = 1
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////proj anim////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

proj.forEach((e, i) => {
    e.addEventListener('mouseover', function() {
        widthP = window.getComputedStyle(e.children[0]).width
        e.children[0].style.fontSize = '50px'
        e.children[0].style.textAlign = 'center'
        e.children[0].style.width = '100%'
        e.children[1].style.opacity = '0.3'
        if (i === 6) {
            span.style.color = '#E8314E'
        }
    })

    e.addEventListener('mouseout', function() {
        e.children[0].style.fontSize = '20px'
        e.children[0].style.textAlign = 'left'
        e.children[0].style.width = `${widthP}`
        e.children[1].style.opacity = '0'
        if (i === 6) {
            span.style.color = 'white'
        }
    })
})

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////translation////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////



// function translation(keys) {
//     console.log(keys)
// }

// console.log(i18Obj['ru'])

// for (let keys in i18Obj) {
//     if (keys === 'ru') {
//         translation(keys)
//     }
// }

lang.addEventListener('click', function(event) {
    for (let i in i18Obj[`${event.srcElement.className}`]) {
        transWords.forEach(e => {
            if (e.dataset.i18 === i) {
                e.innerHTML = i18Obj[`${event.srcElement.className}`][i]
            }
        })
    }
})