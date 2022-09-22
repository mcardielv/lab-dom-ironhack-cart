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
  let subTotal = 0;

  allProducts.forEach((product) => {
    subTotal += updateSubtotal(product);
  });

  // // ITERATION 3
  const superTotal = document.getElementById('total-value');
  console.log(superTotal);
  superTotal.innerText = '$' + subTotal;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const removeChild = target.parentNode.parentNode;
  console.log(removeChild);

  const parent = removeChild.parentNode;
  console.log(parent);

  parent.removeChild(removeChild);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value;
  console.log(name);
  const price = document.querySelectorAll('.create-product input')[1].value;

  createNewProductRow(name, price);
}

function createNewProductRow(name, price) {
  const cart = document.querySelector('tbody');

  const trProduct = document.createElement('tr');
  trProduct.className = 'product';

  const tdName = document.createElement('td');
  const nameSpan = document.createElement('span');
  tdName.className = 'name';
  nameSpan.innerText = name;
  tdName.appendChild(nameSpan);

  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  tdPrice.innerText = '€';
  const tdPriceContent = document.createElement('span');
  tdPriceContent.innerText = price;
  tdPrice.appendChild(tdPriceContent);

  const tdQuantity = document.createElement('td');
  tdQuantity.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.placeholder = 'Qauntity';
  quantityInput.min = 0;
  tdQuantity.appendChild(quantityInput);

  const tdSubtotal = document.createElement('td');
  tdSubtotal.className = 'subtotal';
  tdSubtotal.innerText = '€';
  const subtotalSpan = document.createElement('span');
  subtotalSpan.innerText = 0;
  tdSubtotal.appendChild(subtotalSpan);

  const tdAction = document.createElement('td');
  tdAction.className = 'action';
  const buttonAction = document.createElement('button');
  buttonAction.className = 'btn btn-remove';
  buttonAction.innerText = 'Remove';
  buttonAction.addEventListener('click', removeProduct);
  tdAction.appendChild(buttonAction);

  trProduct.appendChild(tdName);
  trProduct.appendChild(tdPrice);
  trProduct.appendChild(tdQuantity);
  trProduct.appendChild(tdSubtotal);
  trProduct.appendChild(tdAction);

  cart.appendChild(trProduct);
}

//other way to copy html structure directly
// function createProduct() {
//   const productName = document.querySelector('.product-name');
//   const productPrice = document.querySelector('.product-price');

//   const addToList = document.querySelector('tbody');
//   addToList.innerHTML += `
//       <tr class="product">
//       <td class="name">
//         <span>${productName.value}</span>
//       </td>
//       <td class="price">$<span>${productPrice.value}</span></td>
//       <td class="quantity">
//         <input type="number" value="0" min="0" placeholder="Quantity" />
//       </td>
//       <td class="subtotal">$<span>0</span></td>
//       <td class="action">
//         <button class="btn btn-remove">Remove</button>
//       </td>
//     </tr>
//   `;

//   //clearing the input fields
//   productName.value = '';
//   productPrice.value = 0;
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('btn-remove').forEach((productButton) => {
    productButton.addEventListener('click', removeProduct);
  });

  document.querySelector('#create').addEventListener('click', createProduct);
});
