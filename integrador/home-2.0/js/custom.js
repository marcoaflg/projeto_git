//Tooltip - Bottom description ticket 
$(document).ready(function () {
    $('.tooltipped').tooltip();
});

// Hamburguer Down Menu 
$('.dropdown-trigger').dropdown();

// Home Main Slider
$('.slider').slider({
    full_width: true,
    interval: 3000
});
$('#nextBtn').click(function () {
    $('.slider').slider('start');
    setTimeout(function () {
        $('.slider').slider('pause');
    }, 800);
});

// Autocomplete Search Bar
$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Musica": null,
            "Tecnologia": null,
            "Sociedada": null,
            "Temas": null
        }
    });
});