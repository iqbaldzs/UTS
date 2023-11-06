let cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  refreshCart();
}

function removeFromCart(product) {
  const index = cartItems.indexOf(product);
  if (index > -1) {
    cartItems.splice(index, 1);
  }
  refreshCart();
}

function refreshCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';
  cartItems.forEach(function(product) {
    const li = document.createElement('li');
    li.textContent = product;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Hapus';
    removeButton.onclick = function() {
      removeFromCart(product);
    };
    li.appendChild(removeButton);
    cartItemsElement.appendChild(li);
  });
}

function checkout() {
  document.getElementById('product-list').style.display = 'none';
  document.getElementById('cart').style.display = 'none';
  document.getElementById('checkout').style.display = 'block';
}

function confirmOrder() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  // Lakukan logika untuk melakukan pembayaran dan mengirim pesanan ke server

  alert('Pesanan Anda telah dikonfirmasi!');
  location.reload();
}
