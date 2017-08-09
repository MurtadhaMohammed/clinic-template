jQuery(document).ready(function (e) {
    
    
    $('.team .img-box').click(function (e) {
       $(this).children().addClass('select').parents('.col-md-3').siblings().children().children().removeClass('select');
    });


    
    $('.team .img-box').hover(function (e) {
       $(this).children().addClass('select').parents('.col-md-3').siblings().children().children().removeClass('select');
    });

    //smooth secrolling
     $(document).on('click','.navbar a',function(){
            $('html,body').animate({
            scrollTop: $('.'+ $(this).data('value')).offset().top-$(this).height()+30
           },800);
       });

    
  


});
