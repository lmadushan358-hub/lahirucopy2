

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent. (Demo)");
    this.reset();
});

// Keyboard navigation (optional)
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        // Can add modal close logic later
    }
});



const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click",function(e){
navLinks.classList.toggle("active");
e.stopPropagation();
});

document.addEventListener("click", function(e){
    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ){
        navLinks.classList.remove("active");
    }

});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    dots.forEach((dot)=> {
        dot.classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}


dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        current = index;
        showSlide(current);
    });
});
setInterval(() => {
    current++;
    if(current >= slides.length){
        current = 0;
    }
    showSlide(current);
}, 3000);

let startX = 0;
let endX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {

    // Swipe Left -> Next Slide
    if (startX - endX > 50) {
        current++;

        if (current >= slides.length) {
            current = 0;
        }

        showSlide(current);
    }

    // Swipe Right -> Previous Slide
    if (endX - startX > 50) {
        current--;

        if (current < 0) {
            current = slides.length - 1;
        }

        showSlide(current);
    }
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Message Sent Successfully!");
});
emailjs.init("9IqtxSNrhi4U_lrCH");
emailjs.sendForm(
    "service_e3tdss2",
    "template_of1v0b9",
    this
)
