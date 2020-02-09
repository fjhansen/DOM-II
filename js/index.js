// Mouse Events

const imgContent = document.querySelector(".img-content");

imgContent.addEventListener("mouseenter", () => {
    imgContent.style.transform = "scale(1.2)";
    imgContent.style.transition = "transform 0.3s"
})

imgContent.addEventListener("mouseleave", () => {
    imgContent.style.transform = "scale(1)";
})