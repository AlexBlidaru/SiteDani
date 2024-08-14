document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = `mailto:alexblidaru@yahoo.com?subject=Mesaj%20de%20la%20${name}&body=${message}%0A%0AEmail:%20${email}`;
            
            window.location.href = mailtoLink;
        });
    } else {
        console.error('Elementul cu ID-ul "contact-form" nu a fost găsit.');
    }
});


function activateLink(sectionId) {
    // Ascunde toate secțiunile
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afișează doar secțiunea selectată
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Când pagina se încarcă, afișează doar secțiunea "Despre Noi"
window.onload = function() {
    activateLink('despre-noi');
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideFoto");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

document.querySelectorAll('#materiale-foto img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const caption = document.getElementById('caption');

        modal.style.display = 'block';
        modalImage.src = this.dataset.large;
        caption.textContent = this.alt;
    });
});

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
