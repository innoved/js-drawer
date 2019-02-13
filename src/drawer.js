//import './drawer.scss';

(function($) {

  'use strict';

  let drawerFilterIsOpen = false;

  const InnovedDrawer = function() {

    //private - render backdrop and lock page scrolling
    const drawerBackdrop = function() {
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
              $('body').css('overflow-y', 'auto');
          }
      }
    };

    //private - set the position of the drawer to fixed if we have scrolled past the top
    const drawerPosFix = function() {
        const elementPosition = $('.drawer').offset().top;

        var scrollTimeout;
        const throttle = 250; //we can set the throttle pretty high because we wont be scrolling when the drawer is open

        $(window).on('scroll', function () {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {

                    const yScrollPos = window.pageYOffset;
                    const scrollPosTest = elementPosition;

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

    //private
    const toggleDrawerFilter = function(target, btn) {
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

    //private
    const toggleDrawer = function() {
        if($('.drawer').hasClass('drawer-is-open')) {
            $('.drawer').removeClass('drawer-is-open');
        } else {
            $('.drawer').addClass('drawer-is-open');
        }
        drawerBackdrop();
    }

    //public
    this.toggleDrawer = function() {
        toggleDrawer();
    };

    //public
    this.init = function() {
        if($('.drawer').length) {
            drawerBackdrop();
            drawerPosFix();
            $('body').on('click', '#js-open-drawer, .drawer-backdrop, .js-toggle-drawer', function() {
                toggleDrawer();
            });
            $('body').on('click', '.js-toggle-drawer-filter', function() {
                const target = $(this).data('target');
                const btn = $(this);
                toggleDrawerFilter(target, btn);
            });
        }
    };

  };

  //return the object for global use
  $.innovedDrawer = function() {
    return new InnovedDrawer();
  }

})(jQuery);

//export for package
export default $.innovedDrawer();