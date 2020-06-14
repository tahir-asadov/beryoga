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

  $( '.mobile-menu-button' ).click( function(){
    $( 'body' ).toggleClass( 'menu-open' );
    if( $( 'body' ).hasClass( 'menu-open' ) ){
      $( 'body' ).on( 'scroll touchmove mousewheel DOMMouseScroll', function( e ){
        e.preventDefault();
        e.stopPropagation();
        return false;
      } )
    }else {
      $( 'body' ).unbind( 'scroll touchmove mousewheel DOMMouseScroll' );
    }
  } );

});