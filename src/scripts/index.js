'strict mode'

import '../styles/styles.scss';
import { CAROUSEL, GALERIA, POLAROIDE } from '../data';

const index = (() => {

    let pageIndex = 8;

    function render(qtd) {
        POLAROIDE.lista.slice(pageIndex-qtd, pageIndex).forEach((card) => {
            document.querySelector('.galeria-market')
            .insertAdjacentHTML('beforeend', createCard(card));
        })
    }


    // criacao dinamica para CARD POLAROIDE
    function createCard(card) {
        const {image, name, price, author} = card;

        return /*html*/`
            <div class='polaroide'>
                <div >
                    <img class='galeria-imagem' src='${image}'>
                </div>
                <div class='infos-bloco'>
                    <div class='infos'>
                        <h3>${name}</h3>
                        <p>${author}</p>
                    </div>
                    <div class='price'>
                        <h4>${price} ETH</h4>
                    </div>
                </div>
                <button class='button-market buy' type='button'>Collect Now</button>
            </div>
        `;
    }

    // Criacao dinamica CARD GALERIA
    function createGalery(cartao) {
        const {image, name, price, author} = cartao;

        return /*html*/`
            <div class='galeria-item'>
                <div >
                    <img class='galeria-imagem' src='${image}' alt='NFT Image'>
                </div>
                <div class='box-value'>
                    <div class='value'>
                        <h5>${name}</h5>
                        <p>${author}</p>
                        <h4>${price} ETH</h4>
                    </div>
                    <div class='botao-item'>
                        <button class='button' type='button'>Collect Now</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Criacao dinamica CARD CAROUSEL
    function createCarousel(carousel) {
        const {image, name, logo, followers} = carousel;

        return /*html*/`
            <div class='artist'>
                <img class='' src='${image}' alt='NFT Image'>
                <img class='logo' src='${logo}' alt=''>
                <div class='text-artist'>
                    <h5>${name}</h5>
                    <h4>${followers} <span>Artwork</span></h4>
                </div>
                <button class='button' type='button'>Collect Now</button>
            </div>
        `;
    }
    
    function showMore() {
        pageIndex += 4;
        render(4);
    }

    function events() {
        // // Criacao botao VIEW MORE - GALERIA
        document.querySelector('.view-more').addEventListener('click', () => {
            showMore();
            
            if(document.querySelector('.galeria-market').childElementCount === 16){
                document.querySelector('.view-more').style.display = 'none'
            }
        });

        // botao funcional carousel
        document.querySelectorAll('.controle').forEach(button => {
            button.addEventListener('click', (e) => {
                const btn = e.currentTarget;
                const dataBtn = btn.dataset.btn;
                
                document.querySelectorAll('.carousel-items').forEach(dataBtn => dataBtn.style.display = 'none');
                document.querySelector(dataBtn).style.display = 'grid';
            })
        });
    }

    document.querySelector('.btn-1').addEventListener("click", (event) => {
        const clickButton = event.currentTarget;
        
        clickButton.classList.add('active')
        document.querySelector('.btn-2').classList.remove('active');

    });
    
    document.querySelector('.btn-2').addEventListener("click", (event) => {
        const clickButton = event.currentTarget;
        
        clickButton.classList.add('active');
        document.querySelector('.btn-1').classList.remove('active');
    })
    

    function init() {
        render(8);

        // carousel + JQUERY
        $(function (){
            $('.carousel-items').slick({
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

        GALERIA.forEach(cartao => {
            document.querySelector('.galeria')
            .insertAdjacentHTML('beforeend', createGalery(cartao));
        });

        CAROUSEL.forEach(carousel => {
            document.querySelector('.button-1')
            .insertAdjacentHTML('afterbegin', createCarousel(carousel));

            document.querySelector('.button-2')
            .insertAdjacentHTML('afterbegin', createCarousel(carousel));
        });
        
        events();
    }

    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', index.init);