// Typing Animation
const nameText = "MAYURI KONNURI";
let char = 0;
function typeEffect() {
  if (char < nameText.length) {
    document.getElementById("typedName").textContent += nameText.charAt(char);
    char++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Scroll Fade-In
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Dark Mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });