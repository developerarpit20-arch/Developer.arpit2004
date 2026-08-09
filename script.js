const starsContainer = document.querySelector(".stars");

for(let i = 0; i < 150; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 4 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    star.style.animationDelay = (Math.random() * 5) + "s";

    starsContainer.appendChild(star);

}

// Scrole Indecator

const arrow = document.querySelector(".scroll-arrow");

window.addEventListener("scroll", () => {

    const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

    if(pageBottom){
        arrow.style.display = "none";
    }else{
        arrow.style.display = "block";
    }

});

// <============================= Navbar ==========================>

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// <============================== Home ===========================>

   // Hire Me Button
const hireMe = document.getElementById("hireMe");

hireMe.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Download Resume Button

// const downloadResume = document.getElementById("downloadResume");

// downloadResume.addEventListener("click", function () {

//     const link = document.createElement("a");

//     link.href = "resume/resume.pdf";
//     link.download = "Arpit-Tiwari-Resume.pdf";

//     link.click();
// });



// EmailJS Initialize
emailjs.init({
    publicKey: "c1rU1bl36L0Fh70cj"
});

// <=================================Contact section=============================>

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_upqgv6e",
        "template_ifbdp0l",
        "#contactForm"
    )
    .then(function () {

        alert("Message sent successfully! ✅");

        contactForm.reset();

    })
    .catch(function (error) {

        console.log("EmailJS Error:", error);

        alert("Message send nahi hua. Please try again.");

    });

});