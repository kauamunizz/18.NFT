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