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

  function _onWheel( e ){
    e.preventDefault();
  }

  $( '.mobile-menu-button' ).click( function(){
    $( 'body' ).toggleClass( 'menu-open' );
    if( $( 'body' ).hasClass( 'menu-open' ) ){
      document.addEventListener( 'DOMMouseScroll',_onWheel, { capture: false, passive: false } );
      document.addEventListener( 'mousewheel',_onWheel, { capture: false, passive: false } );
      document.addEventListener( 'scroll',_onWheel, { capture: false, passive: false } );
      document.addEventListener( 'touchmove',_onWheel, { capture: false, passive: false } );
    }else {
      document.removeEventListener( 'DOMMouseScroll', _onWheel,  { capture: false, passive: false } );
      document.removeEventListener( 'mousewheel', _onWheel, { capture: false, passive: false } );
      document.removeEventListener( 'scroll', _onWheel, { capture: false, passive: false } );
      document.removeEventListener( 'touchmove', _onWheel, { capture: false, passive: false } );
    }
  } );

});
