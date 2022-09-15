// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');

  let result = parseInt(price) * quantity;

  return (subTotal.innerHTML = result);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);

  for (i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }

  // // ITERATION 3
  const superTotal = document.getElementById('total-value').innerText;
  console.log(superTotal);

  for (i = 0; i < allProducts.length; i++) {
    superTotal.innerHTML += superResult;
  }
  return superTotal.innerHTML;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
