
//------------------corneredlogo efecto scroll hacia arriba---------------//

document.addEventListener('DOMContentLoaded', function() {
  var corneredLogo = document.querySelector('#logo-mini');
  var section1 = document.getElementById('section1');

  corneredLogo.addEventListener('click', function() {
    section1.scrollIntoView({ behavior: 'smooth' });
  });
});


//-------cuando parrafo section2-p no es visible se oculta y cuando es visible vuelve a aparecer-----//
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
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section2_p.style.transition = 'transform 1s ease-out';
        section2_p.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section2);
});

//-------cuando parrafo section3-p no es visible se oculta y cuando es visible vuelve a aparecer-----//
document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.getElementById('section3');
  const section3_p = document.getElementById('section3_p');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section3_p.style.transition = 'transform 1s ease-out';
        section3_p.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section3_p.style.transition = 'transform 1s ease-out';
        section3_p.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section3);
});

document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.getElementById('section3');
  const section3_p2 = document.getElementById('section3_p2');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section3_p2.style.transition = 'transform 1s ease-out';
        section3_p2.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section3_p2.style.transition = 'transform 1s ease-out';
        section3_p2.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section3);
});

//-------cuando parrafo section4-p no es visible se oculta y cuando es visible vuelve a aparecer-----//
document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.getElementById('section4');
  const section3_p = document.getElementById('section4_p');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section3_p.style.transition = 'transform 1s ease-out';
        section3_p.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section3_p.style.transition = 'transform 1s ease-out';
        section3_p.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section3);
});

document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.getElementById('section4');
  const section3_p2 = document.getElementById('section4_p2');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section3_p2.style.transition = 'transform 1s ease-out';
        section3_p2.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section3_p2.style.transition = 'transform 1s ease-out';
        section3_p2.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section3);
});

//-------cuando parrafo section5-p no es visible se oculta y cuando es visible vuelve a aparecer-----//
document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.getElementById('section5');
  const section3_p = document.getElementById('section5_p');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section3_p.style.transition = 'transform 1s ease-out';
        section3_p.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section3_p.style.transition = 'transform 1s ease-out';
        section3_p.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section3);
});

document.addEventListener("DOMContentLoaded", function () {
  const section3 = document.getElementById('section5');
  const section3_p2 = document.getElementById('section5_p2');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Solo aplica la animación si el elemento es completamente visible
        section3_p2.style.transition = 'transform 1s ease-out';
        section3_p2.style.transform = 'translateX(0)';
      } else {
        // Si no es visible, agrega un desplazamiento hacia la izquierda antes de desaparecer
        section3_p2.style.transition = 'transform 1s ease-out';
        section3_p2.style.transform = 'translateX(-130%)';
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section3);
});

//--------------funcion arrow-up---------------//

document.addEventListener('DOMContentLoaded', function() {
  var arrows = document.querySelector('#arrow-up');
  var section2 = document.getElementById('section2');

  arrows.addEventListener('click', function() {
    section2.scrollIntoView({ behavior: 'smooth' });
  });
});

//--------------funcion circle---------------//

document.addEventListener('DOMContentLoaded', function() {
  var arrows = document.querySelector('#circle');
  var section1 = document.getElementById('section3');

  arrows.addEventListener('click', function() {
    section3.scrollIntoView({ behavior: 'smooth' });
  });
});

//--------------funcion arrow-down---------------//

document.addEventListener('DOMContentLoaded', function() {
  var arrows = document.querySelector('#arrow-down');
  var section4 = document.getElementById('section4');

  arrows.addEventListener('click', function() {
    section4.scrollIntoView({ behavior: 'smooth' });
  });
});

//--------------funcion arrow-down---------------//

document.addEventListener('DOMContentLoaded', function() {
  var arrows = document.querySelector('#sq');
  var section5 = document.getElementById('section5');

  arrows.addEventListener('click', function() {
    section5.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---texto u objeto desaparece cuando contenedor ya no es visible para re iniciar la animacion---//

/*document.addEventListener("DOMContentLoaded", function () {
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
});*/

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







