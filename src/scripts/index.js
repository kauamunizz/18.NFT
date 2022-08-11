import '../styles/styles.scss';


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