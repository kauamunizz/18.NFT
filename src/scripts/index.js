import '../styles/styles.scss';
import { POLAROIDE } from './polaroides';


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

console.log(POLAROIDE);


document.querySelectorAll('.controle').forEach(button => {
    button.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const dataBtn = btn.dataset.btn;

        document.querySelectorAll('.carousel-items').forEach(dataBtn => dataBtn.style.display = 'none');
        document.querySelector(dataBtn).style.display = 'grid';
    })
})


function createCard(card) {
    const {image, name, price, author} = card;

    return /*html*/`
        <div class="polaroide">
            <div >
                <img class="galeria-imagem" src='${image}'>
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