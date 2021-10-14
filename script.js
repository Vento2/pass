$(document).ready(function () {
    $('a').click(function () {
        $('#pass').attr('type', $(this).is('a') ? 'text' : 'password');
    });
});
