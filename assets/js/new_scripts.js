$('#carouselExample').on('slide.bs.carousel', function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

$('#carouselExample').carousel({
    interval: 2000
});

$(document).ready(function() {
    /* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event) {
        event.preventDefault();
        var content = $('.modal-body');
        content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);
        content.html($(this).html());
        $(".modal-profile").modal({
            show: true
        });
    });

});

$(document).ready(function() {
    var currentUri = window.location.pathname;
    
    if( currentUri == '/comics/'){
        var slides = 2;
        var speed = 800;
        var autoplaySpeed = 2000;
        var slidesToScroll = 2;
    }else{
        var slides = 3;
        var speed = 800;
        var autoplaySpeed = 2000;
        var slidesToScroll = 3;
    }
    $('.cyber-carousel-items').slick({
        infinite: true,
        slidesToShow: slides,
        slidesToScroll: slidesToScroll,
        autoplay: true,
        autoplaySpeed: 5000,
      });
})
$(document).ready(function () {
    $(".arrow-right").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });

    setTimeout(function(){
        $(".facts-num .counter").each(function(){
            var $counterText = $(this).text();
            $(this).text(numberWithCommas($counterText));
        })
    }, 3000);

    $('.author-comics-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
      });
   
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function(){
    $("#recent_shows_iframe_thumb").on("click", function(){
        var iframeUrl = $(this).attr("data-src");
        $(this).hide();
        $("#all_shows_frame").show();
        $("#all_shows_frame").attr("src", iframeUrl);
        $("#all_shows_frame")[0].src += "?autoplay=1&&mute=1";
    })

    $("#previous_shows_iframe_thumb").on("click", function(){
        var iframeUrl = $(this).attr("data-src");
        $(this).hide();
        $("#previous_shows_frame").show();
        $("#previous_shows_frame").attr("src", iframeUrl);
        $("#previous_shows_frame")[0].src += "?autoplay=1&&mute=1";
    })

    $("#upcoming_shows_iframe_thumb").on("click", function(){
        var iframeUrl = $(this).attr("data-src");
        $(this).hide();
        $("#upcoming_shows_frame").show();
        $("#upcoming_shows_frame").attr("src", iframeUrl);
        $("#upcoming_shows_frame")[0].src += "?autoplay=1&&mute=1";
    })

    $("#our_comics_iframe_thumb").on("click", function(){
        var iframeUrl = $(this).attr("data-src");
        $(this).hide();
        $("#our_comics_frame").show();
        $("#our_comics_frame").attr("src", iframeUrl);
        $("#our_comics_frame")[0].src += "?autoplay=1&&mute=1";
    })

    $(".recent-show-tab-pane .thumb").on("click", function(){
        $("#recent_shows_iframe_thumb").hide();
        $("#all_shows_frame").show();
    })
    $(".upcoming-show-tab-pane .thumb").on("click", function(){
        $("#upcoming_shows_iframe_thumb").hide();
        $("#upcoming_shows_frame").show();
    })
    $(".previous-show-tab-pane .thumb").on("click", function(){
        $("#previous_shows_iframe_thumb").hide();
        $("#previous_shows_frame").show();
    })
})