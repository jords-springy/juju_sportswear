
let products = JSON.parse(localStorage.getItem("products")) || [];
let tbody = document.querySelector('tbody');
let sortButton = document.querySelector('#sort-btn'); 

function adminProducts(){
  tbody.innerHTML = ''; 
  products.forEach(product => {
    tbody.innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td><img class="product-image" src="${product.imageUrl}" width="100" height="100"></td>
        <td>${product.category}</td>
        <td>R${product.price}</td>
        <td>
          <button class="delete-btn" data-id="${product.id}">Delete</button>
          <button class="edit-btn" data-id="${product.id}">Edit</button>
        </td>
      </tr>
    `;
  });


  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.target.dataset.id;
      const index = products.findIndex(product => product.id === parseInt(productId));
      if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        adminProducts(); 
      }
    });
  });


  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.target.dataset.id;
      const index = products.findIndex(product => product.id === parseInt(productId));
      if (index !== -1) {
        const productToEdit = products[index];
        const productNameInput = prompt("Enter new product name:", productToEdit.name);
        const productCategoryInput = prompt("Enter new product category:", productToEdit.category);
        const productPriceInput = prompt("Enter new product price:", productToEdit.price);
        const productImageUrlInput = prompt("Enter new product image URL:", productToEdit.imageUrl);

        if (productNameInput && productCategoryInput && productPriceInput && productImageUrlInput) {
          productToEdit.name = productNameInput;
          productToEdit.category = productCategoryInput;
          productToEdit.price = parseFloat(productPriceInput);
          productToEdit.imageUrl = productImageUrlInput;
          localStorage.setItem("products", JSON.stringify(products));
          adminProducts(); 
        }
      }
    });
  });
}

sortButton.addEventListener('click', () => {
  products.sort((a, b) => b.price - a.price); 
  localStorage.setItem("products", JSON.stringify(products));
  adminProducts(); 
});

adminProducts();










