$(document).ready(function(){
    $('.login-message').fadeOut();
    $('.login-show').addClass('show-log-panel');
});

$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.login-message').fadeOut(); 
        $('.reg-message').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.reg-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.login-message').fadeIn();
        $('.reg-message').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.reg-show').removeClass('show-log-panel');
    }
});