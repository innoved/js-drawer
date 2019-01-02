//import './drawer.scss';

(function($) {

  'use strict';

  const InnovedDrawer = function() {

    // Public - can be called from client code
    this.toggleDrawer = function() {
        if($('.drawer').hasClass('drawer-is-open')) {
            $('.drawer').removeClass('drawer-is-open');
        } else {
            $('.drawer').addClass('drawer-is-open');
        }
        drawerBackdrop();
    }

    // Private - render backdrop and lock page scrolling
    var drawerBackdrop = function() {
      if($('.drawer').css('position') == 'absolute') {
          if($('.drawer').hasClass('drawer-is-open')) {
              $('<div class="drawer-backdrop"></div>').appendTo('#content');
              setTimeout(function() {
                  $('body').addClass('has-drawer-backdrop');
              }, 50);
              $('body').css('overflow-y', 'hidden');
          } else {
              $('body').removeClass('has-drawer-backdrop');
              setTimeout(function() {
                  $(".drawer-backdrop").remove();
              }, 450);
              $('body').css('overflow-y', 'initial');
          }
      }
    };

    // Private - set the position of the drawer to fixed if we have scrolled past the top
    var drawerPosFix = function() {
        var elementPosition = $('.drawer').offset().top;

        var scrollTimeout;
        var throttle = 250; //we can set the throttle pretty high because we wont be scrolling when the drawer is open

        $(window).on('scroll', function () {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {

                    var yScrollPos = window.pageYOffset;
                    var scrollPosTest = elementPosition;

                    if(yScrollPos > scrollPosTest) {
                        $('.drawer').addClass('drawer-is-fixed');
                    } else {
                        $('.drawer').removeClass('drawer-is-fixed');
                    }

                    scrollTimeout = null;
                }, throttle);
            }
        });
    };

    var toggleDrawerFilter = function(target, btn) {
        if(drawerFilterIsOpen) {
            TweenMax.to($(target), 0.35, { left: '-250px', onComplete:function()
                {
                    $(target).hide();
                }
            });
            btn.html('Open Filter');
            drawerFilterIsOpen = false;
        } else {
            $(target).show();
            TweenMax.to($(target), 0.3, { left: '100%', ease: Power3.easeOut });
            btn.html('Close Filter');
            drawerFilterIsOpen = true;
        }
    };

    // Private - can only be called from within this object
    var init = function() {
        drawerBackdrop();
        drawerPosFix();
        $('body').on('click', '#js-open-drawer, .drawer-backdrop, .js-toggle-drawer', function() {
            toggleDrawer();
        });
        $('body').on('click', '.js-toggle-drawer-filter', function() {
            var target = $(this).data('target');
            var btn = $(this);
            toggleDrawerFilter(target, btn);
        })
    };

  };

  //return the object for global use
  $.innovedDrawer = function() {
    return new InnovedDrawer();
  }

})(jQuery);

//export for package
export default $.innovedDrawer();