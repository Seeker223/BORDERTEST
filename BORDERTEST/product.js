/*
// Get the category buttons and product list elements
const categoryButtons = document.querySelectorAll('.category-button');
const productList = document.querySelector('.product-list');

// Define the products data
const products = [
  { id: 1, name: 'Product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', category: 'Fashion' },
  { id: 3, name: 'Product 3', category: 'Electronics' },
  { id: 4, name: 'Product 4', category: 'Home Goods' },
  { id: 5, name: 'Product 5', category: 'Fashion' },
];

// Function to filter products by category
function filterProducts(category) {
  
    const filteredProducts = products.filter(product => product.category === category);
    return filteredProducts;
  
}


// Function to display products
function displayProducts(products) {
  const productHtml = products.map(product => {
    return `
      <div class="product">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
      </div>
    `;
  }).join('');
  productList.innerHTML = productHtml;
}

// Add event listeners to category buttons
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    const filteredProducts = filterProducts(category);
    displayProducts(filteredProducts);
  });
});

// Display all products by default
displayProducts(products);
*/


// Get the category buttons and product list elements
const categoryButtons = document.querySelectorAll('.category-button');
const productList = document.querySelector('.product-list');

// Define the products data
const products = [
  { id: 1, name: 'Product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', category: 'Fashion' },
  { id: 3, name: 'Product 3', category: 'Electronics' },
  { id: 4, name: 'Product 4', category: 'Home Goods' },
  { id: 5, name: 'Product 5', category: 'Fashion' },
];

// Function to filter products by category
function filterProducts(category) {
  if (category === 'all') {
    return products;
  } else {
    const filteredProducts = products.filter(product => product.category === category);
    return filteredProducts;
  }
}

// Function to display products
function displayProducts(products) {
  const productHtml = products.map(product => {
    return `
      <div class="product">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
      </div>
    `;
  }).join('');
  productList.innerHTML = productHtml;
}

// Add event listeners to category buttons
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    const filteredProducts = filterProducts(category);
    displayProducts(filteredProducts);
  });
});

// Display all products by default
displayProducts(products);

