console.log(localStorage.getItem("cartItems"))

let mainContent = document.getElementById("main");  
console.log(mainContent)
let products = JSON.parse(localStorage.getItem("cartItems"));
products.forEach((product) => {
    console.log(product);
    console.log(product[0]);
    console.log(product[0].name);
    console.log(product[0].category);

    mainContent.innerHTML += `
     
      <tr>
      <td>
 
       
      <p>${product[0].name}</p>
      <p>${product[0].category}</p>
      
      <br>
        </td>
      </tr>
    `;
  });