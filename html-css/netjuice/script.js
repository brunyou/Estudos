
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}



document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.smooth-scroll');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Rola suavemente
                });
            }
        });
    });
});


window.addEventListener('scroll', function() {
    // Verificar se o dispositivo é um celular (baseado na largura da tela)
    if (window.innerWidth <= 768) {
        const divs = document.querySelectorAll('.card');
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        let divCrescente = null;

        divs.forEach(function(div) {
            const rect = div.getBoundingClientRect();
            // Verifique se a div está no centro do viewport
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                divCrescente = div;
            } else {
                div.style.transform = 'scale(1)';
                div.classList.remove('centro'); // Remover a classe 'centro' quando não estiver no centro
            }
        });

        // Aplique o crescimento e adicione a classe 'centro' apenas à div no centro
        if (divCrescente) {
            divCrescente.style.transform = 'scale(1.2)';
            divCrescente.classList.add('centro');
        }
    } else {
        // Se a tela for maior que 768px, mantenha o efeito hover original
        const divs = document.querySelectorAll('.card');
        divs.forEach(function(div) {
            div.classList.remove('centro'); // Remover a classe 'centro' em telas maiores
            div.addEventListener('mouseenter', function() {
                div.style.transform = 'scale(1.2)';
            });

            div.addEventListener('mouseleave', function() {
                div.style.transform = 'scale(1)';
            });
        });
    }
});
