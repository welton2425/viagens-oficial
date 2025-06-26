window.revelar = ScrollReveal({resert:true});

revelar.reveal('.logo-js', {
    //estouchamando a classe a qual eu quero atribuir o efeito do scrollReveal.
    duration: 2000,
    distance: '100px',
    origin: 'left'
});

revelar.reveal('.menu', {
    duration: 2000,
    distance: '100px',
    origin: 'right'
});

revelar.reveal('.about', {
    duration: 2000,
    distance: '100px',
    origin: 'left'
});




revelar.reveal('.rodapé', {
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
});





//carrossel automatico sem botões nem interação

const swiper = new Swiper('.swiper', { //inicializaando o carrosel na class ".swiper" usando a bibliotreca swiper
    loop: true, // faz o carrossel repetir intinitamente (loop continuo)
    autoplay: { // configura a reprodução automatica
    delay: 2000, //tempo de espera entre os slide (2000ms = 2 segundos )
    disableOnInteraction: false, // continua a autoplay mesmo se o usuario interagir (ex: tentar arrastar)    

    },

    effect: 'fade', // define o tipo de transição entre as imagens (fade = dissolver)
    fadeEffect: { crossfade: true }, // faz com que o slide anterior desapareça suavemente enquanto o novo aparece 

    allowTouchmove: true, // impede que o usuario use o toque (arraste ) para muda o slide
}); 


const options = {
    strings: [
        "Promoções e",
        "Preços justos ",
        "Venha ser feliz e ",
        "aproveitem nossas ofertas."
    ],

    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    smartBackspace: true 
};


new Typed(".text", options);
