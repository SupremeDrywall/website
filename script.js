
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener('click',e=>{
  e.preventDefault();
  document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
 });
});
const form = document.querySelector("form");

form.addEventListener("submit", async function () {
    setTimeout(() => {
        form.reset();
    }, 1000);
});
