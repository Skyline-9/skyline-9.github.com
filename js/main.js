/* Preloader */
$(document).ready(function () {
    window.onload = function () {
        $('#whirly-loader').fadeOut(500, function () {
            $('#whirly-loader').remove();
        });
    }
});
