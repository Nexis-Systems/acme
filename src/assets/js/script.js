(function () {

    // Navbar

    let menu = document.querySelector('.navbar-menu')
    let burger = document.querySelector('.navbar-burger')
    burger.addEventListener('click', () => {
        menu.classList.toggle('is-active')
        burger.classList.toggle('is-active')
    })

    

})()