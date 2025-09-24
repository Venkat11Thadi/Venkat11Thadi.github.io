document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    // Add your desired titles to this array
    const titles = ["Software Developer", "Data Analyst", "ML Engineer"]; 
    let titleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < titles[titleIndex].length) {
            typewriterElement.textContent += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, 500);
        }
    }

    type(); // Start the typewriter effect

    // --- 2. Fade-in on Scroll Effect ---
    const sections = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});