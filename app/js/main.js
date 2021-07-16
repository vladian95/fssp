$(function(){

    $('.arrears__tabs-inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.arrears__tabs-inner').find('.tab-item').removeClass('active-tab').hide();
        $('.arrears__tabs-inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    
});