var products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 2000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 3000,
    quantity: 1,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 4000,
    quantity: 1,
  },
];

function initializeCartFromLocalStorage() {
  var cartData = localStorage.getItem("cart");
  if (cartData) {
    products = JSON.parse(cartData);
    // update cart
    updateCartUI();
  }
}

// localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(products));
}

// chuc nang update cart
function updateCartUI() {
  var cartTable = document
    .getElementById("productCart")
    .getElementsByTagName("tbody")[0];
  cartTable.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var newRow = cartTable.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = i + 1;
    cell2.innerHTML = product.name;
    cell3.innerHTML = product.price;
    cell4.innerHTML = product.quantity;
    cell5.innerHTML = product.price * product.quantity;
    cell6.innerHTML =
      '<button onclick="removeFromCart(' + i + ')">Xóa</button>';
  }

  updateTotalPrice();
  saveCartToLocalStorage();
}

// add
function addToCart(productId) {
  var quantityInput = document.getElementById("quantity_" + productId);
  var quantity = parseInt(quantityInput.value);

  if (quantity < 1) {
    alert("Hãy chỉnh lại số lượng lớn hơn 0");
    return;
  }

  var productToAdd = products.find(function (product) {
    return product.id === productId;
  });

  if (productToAdd) {
    productToAdd.quantity += quantity;
  } else {
    var newProduct = {
      id: productId,
      name: "Sản phẩm " + productId,

    //   change price
      price: 1000 * productId, 
      quantity: quantity,
    };
    products.push(newProduct);
  }

  updateCartUI();
}

// delete from cart
function removeFromCart(index) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    products.splice(index, 1);
    updateCartUI();
  }
}

// updat cart
function updateTotalPrice() {
  var cartTable = document.getElementById("productCart");
  var totalCell = cartTable.querySelector("#totalPrice");
  var totalPrice = 0;

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    totalPrice += product.price * product.quantity;
  }

  totalCell.innerHTML = totalPrice;
}

// delete all
function clearCart() {
  if (
    confirm("Bạn có chắc chắn muốn xóa toàn bộ sản phẩm trong giỏ hàng không?")
  ) {
    products = [];
    updateCartUI();
  }
}

initializeCartFromLocalStorage();
