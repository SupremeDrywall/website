// ==========================================
// SUPREME DRYWALL WEBSITE V2
// ==========================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Form submission success
const form = document.querySelector(".estimate-form");

if(form){

form.addEventListener("submit",function(){

setTimeout(function(){

alert("✅ Thank you! Your estimate request has been submitted. We will contact you shortly.");

form.reset();

},800);

});

}


// Fade animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".service-card,.gallery-item,.why-card,.contact-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
