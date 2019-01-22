"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//import './drawer.scss';
(function ($) {
  'use strict';

  var drawerFilterIsOpen = false;

  var InnovedDrawer = function InnovedDrawer() {
    //private - render backdrop and lock page scrolling
    var drawerBackdrop = function drawerBackdrop() {
      if ($('.drawer').css('position') == 'absolute') {
        if ($('.drawer').hasClass('drawer-is-open')) {
          $('<div class="drawer-backdrop"></div>').appendTo('#content');
          setTimeout(function () {
            $('body').addClass('has-drawer-backdrop');
          }, 50);
          $('body').css('overflow-y', 'hidden');
        } else {
          $('body').removeClass('has-drawer-backdrop');
          setTimeout(function () {
            $(".drawer-backdrop").remove();
          }, 450);
          $('body').css('overflow-y', 'auto');
        }
      }
    }; //private - set the position of the drawer to fixed if we have scrolled past the top


    var drawerPosFix = function drawerPosFix() {
      var elementPosition = $('.drawer').offset().top;
      var scrollTimeout;
      var throttle = 250; //we can set the throttle pretty high because we wont be scrolling when the drawer is open

      $(window).on('scroll', function () {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(function () {
            var yScrollPos = window.pageYOffset;
            var scrollPosTest = elementPosition;

            if (yScrollPos > scrollPosTest) {
              $('.drawer').addClass('drawer-is-fixed');
            } else {
              $('.drawer').removeClass('drawer-is-fixed');
            }

            scrollTimeout = null;
          }, throttle);
        }
      });
    }; //private


    var toggleDrawerFilter = function toggleDrawerFilter(target, btn) {
      if (drawerFilterIsOpen) {
        TweenMax.to($(target), 0.35, {
          left: '-250px',
          onComplete: function onComplete() {
            $(target).hide();
          }
        });
        btn.html('Open Filter');
        drawerFilterIsOpen = false;
      } else {
        $(target).show();
        TweenMax.to($(target), 0.3, {
          left: '100%',
          ease: Power3.easeOut
        });
        btn.html('Close Filter');
        drawerFilterIsOpen = true;
      }
    }; //private


    var toggleDrawer = function toggleDrawer() {
      if ($('.drawer').hasClass('drawer-is-open')) {
        $('.drawer').removeClass('drawer-is-open');
      } else {
        $('.drawer').addClass('drawer-is-open');
      }

      drawerBackdrop();
    }; //public


    this.toggleDrawer = function () {
      toggleDrawer();
    }; //public


    this.init = function () {
      drawerBackdrop();
      drawerPosFix();
      $('body').on('click', '#js-open-drawer, .drawer-backdrop, .js-toggle-drawer', function () {
        toggleDrawer();
      });
      $('body').on('click', '.js-toggle-drawer-filter', function () {
        var target = $(this).data('target');
        var btn = $(this);
        toggleDrawerFilter(target, btn);
      });
    };
  }; //return the object for global use


  $.innovedDrawer = function () {
    return new InnovedDrawer();
  };
})(jQuery); //export for package


var _default = $.innovedDrawer();

exports.default = _default;
