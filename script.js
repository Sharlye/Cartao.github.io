function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "./Files/Avatar.png")
    } else {
        img.setAttribute("src", "./Files/Avatar.png")
    }
}

//    if(html.classList.contains ("light")) {
//        html.classList.remove ("light")
//    } else {
//        html.classList.add("light")
//    }
