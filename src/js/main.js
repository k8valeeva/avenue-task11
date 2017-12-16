$(document).ready(function () {
    $('.masonry-container').masonry({
        // options
        itemSelector: '.item',
        columnWidth: '.item',
        gutter: 34
    });

    //filter
    $(function() {
        var selectedClass = "";
        $(".fil-cat").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
            }, 300);

        });
    });

    //Gallery

    $('.item').on('mouseover', function () {
        $(this).find('.hover-product-block').stop(true).slideDown(function () {
        }).css('display', 'block');
    });

    $('.item').on('mouseleave',function () {
        $('.hover-product-block').slideUp()
    });
});
