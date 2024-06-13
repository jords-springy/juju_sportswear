function createProduct(name, category, imageUrl, description, quantity, price) {
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.id = Math.random().toString(36).substr(2, 9);
  }
  
  let product1 = new createProduct("Men's Graphic Tracksuit", "Men's Sportswear", "https://jords-springy.github.io/hostedimages/images/mens_tracksuit.png", "Show your love to the league by suiting up with the Brooklyn Nets Tracksuit. Classic graphics over lightweight and breathable fabric make it a go-to layer for hoopers. With its relaxed fit, it easily layers over your gear.",1, 2199.99);
  
  let product2 = new createProduct("Men's Road Running Shoes", "Men's Sportswear", "https://jords-springy.github.io/hostedimages/images/mens_nikewin.png", "Experience energy return with a combination of Cushlon 3.0 foam and a full-length Nike Air unit in the midsole. Plus, an elastic midfoot band and a spacious forefoot provide an accommodating, comfortable fit.",1, 2299.99);
  
  let product3 = new createProduct("Men's Running Shoes", "Men's Sportswear", "https://jords-springy.github.io/hostedimages/images/mens_nikeflex.png", "The Max Air cushioning offers comfortable stability for lifting whether it's a light or heavy day. A wide, flat base gives you enhanced stability and grip for all kinds of tough workouts without sacrificing style, as you roam from station to station and set to set.",1, 1699.99);
  
  let product4 = new createProduct("Women's Tracksuit", "Women's Sportswear", "https://jords-springy.github.io/hostedimages/images/womens_tracksuit.jpg", "Everyone needs a track suit they can count on for everyday life — work-from-home days, weekend nights and everything in between.It has all the details you're after, like a ribbed hem and cuffs, an elastic waist and a full zip for layering your favourite tee underneath.",1, 1799.99);
  
  let product5 = new createProduct("Women's Running Shoes", "Women's Sportswear", "https://jords-springy.github.io/hostedimages/images/womens_nikerev.png", "Stylish as ever, comfortable when the rubber meets the road and performance-driven for your desired pace, it's an evolution of a fan favourite that offers a soft, smooth ride.",1,  375.99);
  
  let product6 = new createProduct("Women's Road Running Shoes", "Women's Sportswear", "https://jords-springy.github.io/hostedimages/images/womens_nikezoom.png", "Designed for quick bursts of force, heart-thumping tempo changes and fast-paced workouts, this shoe helps push you to fresh HIIT heights.",1, 429.99);
  
  let products = [product1, product2, product3, product4, product5, product6];
  
  localStorage.setItem('products', JSON.stringify(products));
  
  let cartItems = [];
  let mainContent = document.querySelector('main');
  
  products.forEach((product) => {
    mainContent.innerHTML += `
      <section>
        <img src="${product.imageUrl}" class="images" align="center">
        <h4 align="center">${product.name}</h4>
        <p>Price: R${product.price}</p>
        <p class="description">${product.description}</p>
        <br>
        <button class="addToCart" value='${product.id}'>Add to Cart</button>
        <button class="viewMore">Description</button>
        <button class="price">Price</button>
      </section>
    `;
  });
  
  products.forEach((product, index) => {
    const section = document.querySelectorAll('section')[index];
    const viewMoreButton = section.querySelector('.viewMore');
    const description = section.querySelector('.description');
    const priceButton = section.querySelector('.price');
  
    viewMoreButton.addEventListener('click', () => {
      description.classList.toggle('show');
    });
  
    priceButton.addEventListener('click', () => {
        const price = section.querySelector('p');
        price.classList.toggle('show');
      });
    });
    
    let addToCartButtons = document.querySelectorAll('.addToCart');
    
    addToCartButtons.forEach((button) => {
      let quantity = 0;
      button.addEventListener('click', (event) => {
        addToCart(event.target.value);
        quantity++;
        button.innerText = `Add to Cart (${quantity})`;
      });
    });
    
    function addToCart(id) {
      let [product] = products.filter((object) => object.id === +id);
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("This item is added to your cart");
    
      updateCartCount();
    }
    
    function updateCartCount() {
      const cartCountElement = document.getElementById("cart-count");
      cartCountElement.innerText = `Cart (${cartItems.length})`;
    }
    
    const sortButton = document.getElementById('sort-button');
    
    sortButton.addEventListener('click', () => {
      products.sort((a, b) => a.price - b.price);
      displayProducts();
    });
    
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm) ||
               product.category.toLowerCase().includes(searchTerm) ||
               product.description.toLowerCase().includes(searchTerm);
      });
    
      mainContent.innerHTML = '';
      filteredProducts.forEach((product) => {
        mainContent.innerHTML += `
          <section>
            <img src="${product.imageUrl}" class="images" align="center">
            <h4 align="center">${product.name}</h4>
            <p>Price: R${product.price}</p>
            <p class="description">${product.description}</p>
            <br>
            <button class="addToCart" value='${product.id}'>Add to Cart</button>
            <button class="viewMore">Description</button>
            <button class="price">Price</button>
          </section>
        `;
      });
    
      const viewMoreButtons = document.querySelectorAll('.viewMore');
      const addToCartButtons = document.querySelectorAll('.addToCart');
      const priceButtons = document.querySelectorAll('.price');
    
      viewMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const description = button.parentNode.querySelector('.description');
          description.classList.toggle('show');
        });
      });
    
      addToCartButtons.forEach((button) => {
        let quantity = 0;
        button.addEventListener('click', (event) => {
          addToCart(event.target.value);
          quantity++;
          button.innerText = `Add to Cart (${quantity})`;
        });
      });
    
      priceButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const price = button.parentNode.querySelector('p');
          price.classList.toggle('show');
        });
      });
    });
    
    function displayProducts() {
      mainContent.innerHTML = '';
      products.forEach((product) => {
        mainContent.innerHTML += `
          <section>
            <img src="${product.imageUrl}" class="images" align="center">
            <h4 align="center">${product.name}</h4>
            <p>Price: R${product.price}</p>
            <p class="description">${product.description}</p>
            <br>
            <button class="addToCart" value='${product.id}'>Add to Cart</button>
            <button class="viewMore">Description</button>
            <button class="price">Price</button>
          </section>
        `;
      });
    
      const viewMoreButtons = document.querySelectorAll('.viewMore');
      const addToCartButtons = document.querySelectorAll('.addToCart');
      const priceButtons = document.querySelectorAll('.price');
    
      viewMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const description = button.parentNode.querySelector('.description');
          description.classList.toggle('show');
        });
      });
    
      addToCartButtons.forEach((button) => {
        let quantity = 0;
        button.addEventListener('click', (event) => {
          addToCart(event.target.value);
          quantity++;
          button.innerText = `Add to Cart (${quantity})`;
        });
      });
    
      priceButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const price = button.parentNode.querySelector('p');
          price.classList.toggle('show');
        });
      });
    }
    
    displayProducts();