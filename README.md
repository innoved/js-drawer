
# Drawer script

  

A slideable sidebar 'drawer' for responsive templates. Has the ability to open/close by sliding out of the viewport if the display width is <= tablet size.

  

## Public Methods

    innovedDrawer.init(); // to be ran only once initially and if after drawer is programatically loaded
    innovedDrawer.toggleDrawer(); // open/close drawer depending on current state

## Current Usage in Application

For examples see: http://ccf.local.vm/ems/competence-reviews or http://ccf.local.vm/ems/cf/config/responsibilities.

The drawer for these pages is set to the left hand filter, and left hand sidebar respectively. Reduce the screen size to 991px and below to see these element convert into a slideable drawer which can be opened and closed.

To close an opened drawer either click the close button or click outside of the drawer over the page content, to open it, there will be an open button near the top of the page content (or whatever location the button is positioned).

Increasing the display size again and then decreasing it, the drawer should retain it's 'opened' or 'closed' state.

When a drawer is in an opened state, page scrolling should be locked (for available devices). However, if the vertical screensize of the window is smaller than the height of the drawer's content, you should be able to scroll within the drawer to navigate down to any hidden content within it.