import '../styles/styles.scss';

$(function (){
    $(".carousel-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".back-to"),
        nextArrow: $(".next-to"),
        centerPadding: '60px',
        variableWidth: true,
    })
})