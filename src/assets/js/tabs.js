(function () {
    let tabLinks = document.querySelectorAll(".tab")

    let setActive = (tabLink) => {
        let targetId = tabLink.getAttribute("data-target")
        if (targetId) {
            let target = document.getElementById(targetId)
            let tabLinks = document.querySelectorAll(".tab")
            let contents = document.querySelectorAll(".content-tab")
            if (contents) {
                contents.forEach(content => content.style.display="none")
            }

            if (tabLinks) {
                tabLinks.forEach(tbL => tbL.classList.remove("is-active"))
            }

            if (target) {
                target.style.display = "block"
                tabLink.classList.add("is-active")
            }
        }
    }

    tabLinks.forEach(tabLink => {
        tabLink.addEventListener("click", () => {
            setActive(tabLink)
        })

        if (tabLink.classList.contains("is-active")) {
            setActive(tabLink)
        }
    })

})()