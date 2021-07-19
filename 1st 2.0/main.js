$( document ).ready(function() {
    $('.activity-option').on('click', function() {
        $(this).toggleClass('activity-option-active')
        $(this).children('.activity-option__button').toggleClass('activity-option__button-active')
    });
});