$('.dropdown-trigger').dropdown();

$('.slider').slider({
    full_width: true,
    interval: 3000
});

$('.slider').slider('active');

$('#nextBtn').click(function(){
    $('.slider').slider('start');
    setTimeout(function(){
        $('.slider').slider('pause');
    },800);
});