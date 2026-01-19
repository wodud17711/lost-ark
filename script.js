$(function(){

    /* hidden nav 동작구문 */

    const hiddenNav = $(".hidden-nav");
    const navBg = $(".nav-wrap .main-nav");
    const topNav = $(".nav-list");
    const hiddenNavWrap = $(".nav-wrap");

    topNav.mouseenter(function(){

        navBg.addClass('on');
        hiddenNav.stop(true, true).slideDown(100);

    })

    hiddenNavWrap.mouseleave(function(){
        const scrollTop = $(window).scrollTop();

        if (scrollTop <= 48){
            navBg.removeClass('on');
        };

        hiddenNav.stop(true, true).slideUp(100);

    })

    /* scroll시 네비 변경 */

    const navHeight = hiddenNavWrap.outerHeight()

   $(window).scroll(function(){

    const scrollTop = $(window).scrollTop();

    if (scrollTop > 48){

        navBg.addClass('on');
        hiddenNavWrap.addClass('fixed');

        if ($('.nav-placeholder').length === 0){
            hiddenNavWrap.after('<div class="nav-placeholder"></div>');
            $('.nav-placeholder').height(navHeight);
        }
    }

    else{
        navBg.removeClass('on');
        hiddenNavWrap.removeClass('fixed');

        $('.nav-placeholder').remove();
    }
   })









})