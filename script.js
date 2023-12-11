document.addEventListener("DOMContentLoaded", function () {
  const section2 = document.getElementById('section2');
  const section2_p = document.getElementById('section2_p');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section2_p.style.transition = 'transform 1s ease-out';
        section2_p.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, reinicia la animación
        section2_p.style.transition = 'none';
        section2_p.style.transform = 'translateX(-100%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section2);
});

//----empezar animacion de section2_p al observar el div-------//

/*document.addEventListener("DOMContentLoaded", function () {
    const section2 = document.getElementById('section2');
    const section2_p = document.getElementById('section2_p');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section2_p.classList.add('mostrar');
          observer.unobserve(section2);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(section2);
  });*/


//------------------corneredlogo efecto scroll hacia arriba---------------//

document.addEventListener('DOMContentLoaded', function() {
    var corneredLogo = document.querySelector('#logo-mini');
    var section1 = document.getElementById('section1');
  
    corneredLogo.addEventListener('click', function() {
      section1.scrollIntoView({ behavior: 'smooth' });
    });
  });

//-----hacer que section2-P desaparesca al section1 ser visible------//


