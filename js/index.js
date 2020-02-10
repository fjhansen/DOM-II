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
        event.stopPropagation();
        
    })
})

// Change nav background on click + Stop Propagation

let navBackground = document.querySelector(".main-navigation")

navBackground.addEventListener("click", () => {
    event.stopPropagation();
    navBackground.style.backgroundColor = "rgba(224, 106, 106, 0.5)";
    
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


// Stop Propogation

const body = document.querySelector('body');



// Prevent Default

let navLink = document.querySelectorAll('.nav-link');


navLink.forEach(link => {
link.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.style.color = "darkcyan";
})

})

const footerBg = document.querySelector('footer');

// Create Dark Mode Button

var button = document.createElement("button");
button.innerHTML = "Dark Mode";
button.style.backgroundColor = "black";
button.style.color = "white"

// Append Dark Mode Button

let navPre = document.getElementsByTagName('nav')[0];

navPre.append(button)

button.addEventListener('click', () => {
    event.stopPropagation();
    document.body.style.backgroundColor = "var(--color-dark)";
    document.body.style.color = "var(--color-light)";
    navBackground.style.backgroundColor = "var(--color-dark-accent)";
   document.body.h2.style.color = "yellow";
  
    footerBg.style.backgroundColor = "var(--color-dark-accent)";


})

// Change Header + Footer Color on Resize

window.addEventListener('resize', () => {
    event.stopPropagation();
    
    document.body.style.backgroundColor = "lavender";
    navBackground.style.backgroundColor = "blueviolet";
    footerBg.style.backgroundColor = "blueviolet";
    document.body.style.color = "indigo";
})


