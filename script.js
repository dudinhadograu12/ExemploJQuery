$(document).ready(function(){
    $('#btn_esconder').click(function(){
        $('.texto').hide('fast');
    });
});

$('#btn_exibir').click(function(){
    $('.texto').hide('slow');
});
;