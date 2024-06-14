let products = JSON.parse(localStorage.getItem("products"));
let tbody = document.querySelector('tbody');
function adminProducts(){
   products.forEach(product => {
  tbody.innerHTML += `
    <tr>
      <td>${product.name}</td>
      <td><img class="product-image" src="${product.imageUrl}" width="100" height="100"></td>
      <td>${product.category}</td>
      <td>R${product.price}</td>
      <td><button class="edit-button">Edit</button></td>
      <td><button class="delete-button" data-product-id="${product.id}">Delete</button></td>
    </tr>
  `;
});
}
adminProducts();








