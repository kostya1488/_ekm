$(document).ready(function() {
    $("#form_request").submit(
        function() {
            sendAjaxForm('form_request', 'php/formhandler.php');
            return false;
        }
    );
});



function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
            $('.form_wrap').addClass('form_send')
        },
        error: function(response) {
            $('.form_response').css('color', 'red').html('Произошла ошибка');
            $('.form_wrap').addClass('form_send');

        }
    });

}