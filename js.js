function show() {
    let responsive_menu = document.getElementById('responsive-nv-br')
    let menu_logo = document.getElementById('menu-logo')
    if (responsive_menu.style.right == '-1000px') {
        responsive_menu.style.right = '0'
        menu_logo.src = 'assets//close.png'
    }
    else {
        responsive_menu.style.right = '-1000px'
        menu_logo.src = 'assets//menu-regular-24.png'
    }
}

//for Loader
let load = document.getElementById('pre-loader')
window.addEventListener('load', ()=>{
    load.style.display = 'none'
})

// Scroll Reveal
const sr = ScrollReveal({})

sr.reveal('h1', {
    origin: 'top',
    distance: '50px',
    duration: 2000
});
sr.reveal('img', {
    origin: 'top',
    distance: '50px',
    duration: 2000
});
sr.reveal('input', {
    origin: 'left',
    distance: '50px',
    duration: 2000
});
sr.reveal('textarea', {
    origin: 'left',
    distance: '50px',
    duration: 2000
});
// sr.reveal('home-text-btn', {delay: 200})
// sr.reveal('home-Img', {delay: 200})
