import '../styles/styles.scss';
import { CAROUSEL } from './carousel';
import { GALERIA } from './galeria';
import { POLAROIDE } from './polaroides';
import { POLAROIDE2 } from './polaroides2';

// carousel + JQUERY
$(function (){
    $(".carousel-items").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true
    })
});
// fim carousel

// botao funcional carousel
document.querySelectorAll('.controle').forEach(button => {
    button.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const dataBtn = btn.dataset.btn;

        document.querySelectorAll('.carousel-items').forEach(dataBtn => dataBtn.style.display = 'none');
        document.querySelector(dataBtn).style.display = 'grid';
    })
})
// fim botao

// criacao dinamica para CARD POLAROIDE
function createCard(card) {
    const {image, name, price, author} = card;

    return /*html*/`
        <div class="polaroide">
            <div >
                <img class="galeria-imagem" src="${image}">
            </div>
            <div class="infos-bloco">
                <div class="infos">
                    <h3>${name}</h3>
                    <p>${author}</p>
                </div>
                <div class="price">
                    <h4>${price} ETH</h4>
                </div>
            </div>
            <button class="button-market buy" type="button">Collect Now</button>
        </div>
    `;
}

POLAROIDE.forEach(card => {
    document.querySelector('.galeria-market')
    .insertAdjacentHTML('beforeend', createCard(card));
});


// fim POLAROIDE


// Criacao dinamica CARD GALERIA
function createGalery(cartao) {
    const {image, name, price, author} = cartao;

    return /*html*/`
        <div class="galeria-item">
            <div >
                <img class="galeria-imagem" src="${image}" alt='NFT Image'>
            </div>
            <div class="box-value">
                <div class="value">
                    <h5>${name}</h5>
                    <p>${author}</p>
                    <h4>${price} ETH</h4>
                </div>
                <div class="botao-item">
                    <button class="button" type="button">Collect Now</button>
                </div>
            </div>
        </div>
    `;
}

GALERIA.forEach(cartao => {
    document.querySelector('.galeria')
    .insertAdjacentHTML('beforeend', createGalery(cartao));
});

// Fim GALERIA


// Criacao dinamica CARD CAROUSEL
function createCarousel(carousel) {
    const {image, name, logo, followers} = carousel;

    return /*html*/`

        <div class="artist">
            <img class="" src="${image}" alt='NFT Image'>
            <img class="logo" src="${logo}" alt="">
            <div class="text-artist">
                <h5>${name}</h5>
                <h4>${followers} <span>Artwork</span></h4>
            </div>
            <button class="button" type="button">Collect Now</button>
        </div>
        
    `;
}

CAROUSEL.forEach(carousel => {
    document.querySelector('.button-1')
    .insertAdjacentHTML('afterbegin', createCarousel(carousel));
});

CAROUSEL.forEach(carousel => {
    document.querySelector('.button-2')
    .insertAdjacentHTML('afterbegin', createCarousel(carousel));
});

// fim CARD CAROUSEL


// Criacao botao VIEW MORE - GALERIA
document.querySelector('.view-more').addEventListener('click', () => {

    POLAROIDE2.forEach(card => {
        document.querySelector('.galeria-market')
        .insertAdjacentHTML('beforeend', createCard(card));
    })

    if(document.querySelector('.galeria-market').childElementCount === 16){
        document.querySelector('.view-more').classList.add("hidde")
    }
});