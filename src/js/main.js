$(document).ready(function() {

  $('.band-content').magnificPopup({type:'image'});
  $('.band-content').appear();

  $(document.body).on('appear', '.band-content', function(e, $affected) {
    $(this).addClass( 'animated pulse' );
  });

  $(window).scroll();
  AOS.init();

  function window_resize(){
    $('.window-width').text( $( window ).width() + 'px' );
  }

  $( window ).resize( function(){
    window_resize();
  } );

  $( window ).on( 'load', function(){
    window_resize();
  });
  
});