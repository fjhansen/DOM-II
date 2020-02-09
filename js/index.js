// Mouse Events

// hover image

document.querySelectorAll(".img-content").forEach( el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "transform 0.3s";
    })
})

document.querySelectorAll(".img-content").forEach( el => {
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
    })
})

// Change nav background on click

let navBackground = document.querySelector(".main-navigation")

navBackground.addEventListener("click", () => {
    navBackground.style.backgroundColor = "rgba(224, 106, 106, 0.5)";
    navBackground.style.color = "black";
    navBackground.style.fontWeight = "bolder";
    navBackground.style.borderBottom = "3px dashed rgba(224, 106, 106, 0.52)"
   
})

// Change nav styles to default on double click 

navBackground.addEventListener("dblclick", () => {
    navBackground.style = "initial";
})

// Fun Bus Cursor Easter Egg

let navTitle = document.getElementsByTagName('img')[0]

navTitle.addEventListener("click", () => {
    document.body.style.cursor = "url(https://i.imgur.com/G9YBAA6.png), auto";
    
})

navTitle.addEventListener("dblclick", () => {
    document.body.style.cursor = "initial";
    
})




