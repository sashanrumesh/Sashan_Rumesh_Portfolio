$(document).ready(function() {
    // Simple lightbox functionality
    $('.gallery-item a').on('click', function(e) {
        e.preventDefault();
        var image = $(this).attr('href');
        $('body').append('<div class="lightbox"><img src="' + image + '"><div class="close">×</div></div>');
        $('.lightbox').fadeIn();
    });
    
    // Close lightbox
    $('body').on('click', '.close, .lightbox', function() {
        $('.lightbox').fadeOut(function() {
            $(this).remove();
        });
    });
});