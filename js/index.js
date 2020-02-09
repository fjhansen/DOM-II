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




