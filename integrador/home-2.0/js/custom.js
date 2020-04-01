$('.dropdown-trigger').dropdown();

$('.slider').slider({
    full_width: true,
    interval: 3000
});

$('#nextBtn').click(function(){
    $('.slider').slider('start');
    setTimeout(function(){
        $('.slider').slider('pause');
    },800);
});