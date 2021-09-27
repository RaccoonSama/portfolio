$(document).ready(function() {
   
    $('#burger').click(()=> {
        if ($('#menu_checkbox').is(':checked')) {
            $('#ligne1').css( "transform","translateY(20px)");
            $('#ligne3').css( "transform","translateY(-20px)");
            $('.list-header').toggleClass("header-anim-in");
           
        }else if (!$('#menu_checkbox').is(':checked')) {
            $('#ligne1').css( "transform","translateY(0px)");
            $('#ligne3').css( "transform","translateY(0px)");
            $('.list-header').toggleClass("header-anime-out");
        }
      
    });

    if (($(window).width() > 768) && !$('#menu_checkbox').is(':checked')) {
        $('.list-header').removeClass("header-anim-in");
        $('.list-header').removeClass("header-anime-out");
        
    }

});