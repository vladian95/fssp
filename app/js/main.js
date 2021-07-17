$(function(){

    $('.arrears__tabs-inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.arrears__tabs-inner').find('.tab-item').removeClass('active-tab').hide();
        $('.arrears__tabs-inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="#"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="#"></button>'
      });
          
    $('.adaptive__title').on('click', function(){
        $(this).next('.dropdown').slideToggle()
    });

    $('.sidebar__adaptive-title').on('click', function(){
        $(this).next('.sidebar__adaptive-dropdown').slideToggle()
    });
    
});