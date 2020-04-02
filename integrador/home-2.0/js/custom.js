$('.dropdown-trigger').dropdown();

$('.slider').slider({
    full_width: true,
    interval: 3000
});

$(document).ready(function(){                 
    $('input.autocomplete').autocomplete({
    data: {
        "Musica": null,
        "Tecnologia": null,
        "Sociedada": null,
        "Temas":null
    }
    });                
    });

$('#nextBtn').click(function(){
    $('.slider').slider('start');
    setTimeout(function(){
        $('.slider').slider('pause');
    },800);
});