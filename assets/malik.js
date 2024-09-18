(() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('malik.js loaded');

    moveCartIcon();

    /**
     * Find the Kaktusc sticky cart icon. Retries up to 10 times every 500ms.
     * - If the cart trigger is not found after 5 seconds, an error is logged and cart functionality is disabled (bad).
     * - If found, move the Kaktusc sticky cart into the header
     */
    function moveCartIcon() {
      const maxRetries = 10;
      let retryCount = 0;

      if (!document.getElementById('kaktusc-cart-icon')) {
        const retryInterval = setInterval(() => {
          if (retryCount >= maxRetries) {
            console.error('Could not find cart icon after 10 retries');
            clearInterval(retryInterval);
            return;
          }

          if (document.getElementById('kaktusc-cart-icon')) {
            clearInterval(retryInterval);
            move();
          }

          retryCount++;
        }, 500);
      }

      else {
        move();
      }

      function move() {
        const cartIcon = document.getElementById('kaktusc-cart-icon');
        const header = document.querySelector('.header--menu-container');

        console.log('cartIcon', cartIcon);

        if (cartIcon && header) {
          header.appendChild(cartIcon);
          cartIcon.style.display = 'block';
        }
      }
    }

    /**
     *
     */
    function findCartIcon() {

    }
  });
})()
