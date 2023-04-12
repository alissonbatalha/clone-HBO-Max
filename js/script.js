
//função mostrar/esconder benefícios
const inclusoSpan = document.querySelector("span#incluso-span");
const inclusoLista = document.querySelector("ul#incluso-lista");

inclusoSpan.addEventListener("click", (event) => {
	event.preventDefault();
	
	inclusoSpan.classList.toggle('span-active');
	inclusoLista.classList.toggle('menu-active');
});


//carrosel de imagens 1
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//carrossel de imagens 2
var showroomModule = {
    config: {
      gtm: null,
      carousel: null,
      moduleSlideContainer: null,
    },
    setSlideContainerEvent: function () {
      function getLink(node) {
        if (!node || !node.parentNode) return null;
        else if (node.parentNode.nodeName === "A") {
          return node.parentNode.href;
        } else return getLink(node.parentNode);
      }

      function handleContainerClick(event) {
        var link = getLink(event.target);

        if (link) {
          this.config.gtm.setGTM({ eventTrigger: "link", link });
          this.config.gtm.sendGTM();
        }
      }
      if (this.config.moduleSlideContainer) {
        this.config.moduleSlideContainer.addEventListener(
          "click",
          handleContainerClick.bind(this)
        );
      }
    },
    init: function () {
      var pagination = {
        dots: {
          container: document.querySelector("#showroom-module .showroom-dots"),
          allDots: document.querySelectorAll(
            "#showroom-module .showroom-dots .dot"
          ),
        },
        arrows: {
          previous: document.querySelector(
            "#showroom-module #showroom--previous"
          ),
          next: document.querySelector("#showroom-module #showroom--next"),
        },
      };

      this.config.moduleSlideContainer = document.querySelector(
        "#showroom-module .showroom-cards"
      );

      this.config.carousel = new ScrollCarousel(
        this.config.moduleSlideContainer,
        document.querySelectorAll("#showroom-module .showroom-card"),
        pagination
      );

      this.config.gtm = new CustomGTM();
      this.config.gtm.setGTM = function (properties) {
        var elementType = "scrollbar";
        var eventType = "Scroll Interaction";
        var eventAction = "Showroom Scroll";

        if (properties.eventTrigger === "arrow") {
          elementType = "button";
          eventType = "Arrow Click Interaction";
          eventAction = "Showroom Arrow Click";
        } else if (properties.eventTrigger === "pagination") {
          elementType = "button";
          eventType = "Pagination Click Interaction";
          eventAction = "Showroom Pagination Click";
        } else if (properties.eventTrigger === "link") {
          elementType = "anchor";
          eventType = "navigation link clicked";
          eventAction = "Navigation Link Clicked";
        }

        this.gtmData = {
          event: "ctaClick",
          metadata: {
            elementType,
            moduleName: "Showroom",
            eventType,
            eventAction,
            eventCategory: "User Click",
            eventLabel: "Showroom Carousel v1.0.1",
            linkUrl: properties.link ? properties.link : null,
            custom_tracking: true,
          },
        };
      };
      this.config.carousel.setEvents();
      this.config.carousel.createGTM(this.config.gtm);
      this.setSlideContainerEvent();
    },
  };
	
	
//carrossel de imagens 3	
new Glider(document.querySelector('.glider'), {
  slidesToShow:1.2,
  slidesToScroll: 1.2,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});


/* accordion list (perguntas e respostas) */

var perguntas = document.querySelectorAll('.pergunta');


for (let i = 0; i < perguntas.length; i++) {
  perguntas[i].addEventListener('click', function () {

    perguntas[i].classList.toggle('pergunta-ativa')

    var resposta = perguntas[i].nextElementSibling;
    resposta.classList.toggle('.resposta-ativa');
		
		
    if (resposta.style.maxHeight) {
      resposta.style.maxHeight = null;
    } else {
      resposta.style.maxHeight = resposta.scrollHeight + 'px';
    }
  });
}

//menu-titulos mobile
const seta = document.querySelector('.canais i');

const menuTitulos = document.querySelectorAll('.canais__titulos');

const hbo = document.getElementById('titulos-hbo');
const max = document.getElementById('titulos-max');
const dc = document.getElementById('titulos-dc');
const wb = document.getElementById('titulos-wb');
const cn = document.getElementById('titulos-cn');
const ucl = document.getElementById('titulos-ucl');



seta.addEventListener("click", (event) => {
	event.preventDefault();
	
	mostraMenu(hbo);
});

function mostraMenu (canal) {
	console.log(canal);
	seta.classList.toggle('seta-ativa');
	canal.classList.toggle('canais__titulos--ativo');
}

//menu-titulos desktop

const menuTitulosDesktop = document.querySelectorAll('.canais__titulos--desktop');

//const allDesktopBoxes = document.querySelectorAll('.canais-desktop__banner > desktop-box');

const desktopBoxes = document.querySelectorAll('.desktop-box');


desktopBoxes.forEach(box => {
	box.addEventListener("click", (event) => {
		event.preventDefault();
		
		for (let i = 0; i < desktopBoxes.length; i++) {
			desktopBoxes[i].classList.toggle('active');
		}
		
	box.children[1].classList.toggle('fadeOut');
	box.classList.remove('active');
	});
});


const hboDesktop = document.getElementById('hbo-desktop');
const maxDesktop = document.getElementById('max-desktop');
const dcDesktop = document.getElementById('dc-desktop');
const wbDesktop = document.getElementById('wb-desktop');
const cnDesktop = document.getElementById('cn-desktop');
const uclDesktop = document.getElementById('ucl-desktop');

function mostraMenuDesktop (canal) {
	console.log(desktopBoxes);
	canal.classList.toggle('open');
}

