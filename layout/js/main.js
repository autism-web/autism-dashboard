//navbar-primary

$('.btn-expand-collapse').click(function(e) {
    $('.navbar-slid').toggleClass('collapsed');
});



$('[data-toggle=offcanvas]').click(function(e) {
    e.preventDefault()
    $('.row-offcanvas').toggleClass('active');
    $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
});