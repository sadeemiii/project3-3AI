// همبرغر
function toggleMenu() { 
    document.querySelector('.nav-links').classList.toggle('active'); 
}

// ظهور الأقسام عند التمرير
const sections = document.querySelectorAll('.section-card, .content-section');
function showSections() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) { section.classList.add('show'); }
    });
}

window.addEventListener('scroll', showSections);
window.addEventListener('load', showSections);

document.addEventListener("DOMContentLoaded", () => {
  console.log("الموقع جاهز 🧠✨");
});

