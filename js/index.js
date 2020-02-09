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



