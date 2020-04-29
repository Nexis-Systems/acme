(function () {

    // Navbar

    let menu = document.querySelector('.navbar-menu')
    let burger = document.querySelector('.navbar-burger')
    burger.addEventListener('click', () => {
        menu.classList.toggle('is-active')
        burger.classList.toggle('is-active')
    })

    // Sidebar
    let sidebarToggler = document.querySelector('.sidebar-toggler')
    let sidebarParentColumn = document.querySelector('.menu.side-menu').parentElement

    sidebarToggler.addEventListener('click', () => {
        console.log(sidebarParentColumn)
        sidebarParentColumn.classList.toggle('is-visible')
    })


})()