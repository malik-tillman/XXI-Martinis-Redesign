(() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('malik.js loaded');

    const allButtons = document.querySelectorAll('.btn');

    if (allButtons) {
      allButtons.forEach(button => {
        // Wrap button text in span
        const buttonText = button.innerHTML;

        button.innerHTML = '';

        const span = document.createElement('span');
        span.innerHTML = buttonText;

        button.appendChild(span);
      });
    }

    const productPageForm = document.querySelector('.main--product .product--form');

    if (productPageForm) {
      console.log('malik -- product page form found', productPageForm);

      const atcButton = productPageForm.querySelector('.atc--container .btn');
      const colorOptions = productPageForm.querySelectorAll('.color--option');
      const sizeOption = productPageForm.querySelector('.size--option');
      const quantityInput = productPageForm.querySelector('.plus-minus-quantity--selector .quantity--input');
      const quantityMinus = productPageForm.querySelector('.plus-minus-quantity--selector .minus');
      const quantityPlus = productPageForm.querySelector('.plus-minus-quantity--selector .plus');

      colorOptions.forEach(colorOption => {
        colorOption.addEventListener('click', () => {
          atcButton.disabled = false;

          colorOptions.forEach(option => {
            option.classList.remove('active');
          });

          colorOption.classList.add('active');
        });
      });

      quantityMinus.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) - 1;

        if (quantityInput.value < 1) {
          quantityInput.value = 1;
        }
      });

      quantityPlus.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
      });

      quantityInput.addEventListener('change', () => {
        if (quantityInput.value < 1) {
          quantityInput.value = 1;
        }
      });

      atcButton.addEventListener('click', () => {
        console.log('malik -- ATC button clicked', window?.mt_productVariants);

        const selectedColor = productPageForm.querySelector('.color--option.active')?.dataset.name;
        const selectedSize = sizeOption.value;
        const selectedQuantity = quantityInput.value;

        if (!selectedColor || !selectedSize || !selectedQuantity) {
          console.error('malik -- Please select a color, size, and quantity');
          return;
        }

        // Find variant id based on selected color and size
        const selectedVariant = window.mt_productVariants.find(variant => {
          return variant.option1 === selectedColor && variant.option2 === selectedSize;
        });

        if (!selectedVariant || !selectedVariant.id) {
          console.error('malik -- Could not find variant for selected color and size');
          return;
        }

        console.log('malik -- selectedColor', selectedColor);
        console.log('malik -- selectedSize', selectedSize);
        console.log('malik -- selectedQuantity', selectedQuantity);
        console.log('malik -- selectedVariant', selectedVariant?.id);

        // Add to cart
        fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: selectedVariant.id,
            quantity: selectedQuantity,
          }),
        })
      });
    }

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
})();

(() => {
  let filterBy = document.getElementById("BlogTagFilter");

  if (!filterBy) {
    return;
  }

  filterBy.addEventListener("change", function () {
    location.href = filterBy.value;
  });
})();
