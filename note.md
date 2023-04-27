This note.md Contains my first code that did not work well.

const apiUrl = "http://localhost:3000/Data"
//the apiUrl contains the api containing the db.json data

document.addEventListener("DOMContentLoaded", function() {
// Fetch the product data from the API
fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const productsDiv = document.getElementById('products');
    // This gets the div container to store all the products
    let html = '';
    // Store the product data in an array for filtering
    let products = data;

    // Display all products initially
    displayProducts(products);

    // Add event listener for the search button
    const searchBtn = document.getElementById('search');
    searchBtn.addEventListener('click', () => {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      // Filter products based on search term
      products = data.filter(product =>
        product.productName.toLowerCase().includes(searchTerm)
      );
      // Display filtered products
      displayProducts(products);
    });

    // Add event listener for the category buttons
    const categoryBtns = document.querySelectorAll('.button-value');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.textContent;
        // Filter products based on category
        products = data.filter(product =>
          product.category === category
        );
        // Display filtered products
        displayProducts(products);
      });
    });

    // Function to display products
    function displayProducts(products) {
      html = '';
      products.forEach(product => {
        html += `
          <div>
            <h2>${product.productName}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.price}</p>
            <img src="${product.image}" alt="${product.productName}">
          </div>
        `;
      });
      productsDiv.innerHTML = html;
    }
  });
  
});






const apiUrl = "http://localhost:3000/Data"

// Get the products from the API
function getProducts() {
  return fetch(apiUrl)
    .then(res => res.json())
    .then(data => data)
}

// Search for products by name
function searchProducts(products, searchValue) {
  return products.filter(product => product.productName.toLowerCase().includes(searchValue.toLowerCase()))
}

// Filter products by category
function filterProducts(products, category) {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase())
}

// Render products on the page
function renderProducts(products) {
  const productsDiv = document.getElementById('products')
  let html = ''
  products.forEach(product => {
    html += `
      <div>
        <h2>${product.productName}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: ${product.price}</p>
        <img src="${product.image}" alt="${product.productName}">
      </div>
    `
  })
  productsDiv.innerHTML = html
}

// Update the product display based on the search value and category
function updateProducts() {
  const searchValue = document.getElementById('search-input').value
  const activeButton = document.querySelector('.button-value.active')
  const category = activeButton ? activeButton.getAttribute('data-category') : null

  getProducts()
    .then(products => {
      if (searchValue) {
        products = searchProducts(products, searchValue)
      }
      if (category) {
        products = filterProducts(products, category)
      }
      renderProducts(products)
    })
}

// Attach event listeners to the search and category buttons
function attachListeners() {
  const searchInput = document.getElementById('search-input')
  const searchButton = document.getElementById('search')
  const categoryButtons = document.querySelectorAll('.button-value')

  // Search by product name on input change
  searchInput.addEventListener('input', () => {
    updateProducts()
  })

  // Search by product name on button click
  searchButton.addEventListener('click', () => {
    updateProducts()
  })

  // Filter products by category on button click
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(button => button.classList.remove('active'))

      // Add active class to clicked button
      button.classList.add('active')

      updateProducts()
    })
  })
}

// Initialize the page
function init() {
  attachListeners()
  updateProducts()
}

init()



//Add an event Listener for the book form submit button
    const bookForm = documment.getElementById('book-form');
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const productValue = document.getElementById('products').value;
        const productIndex = products.findIndex(product => product.value === productValue);
        if (productIndex !== -1) {
            //update product status to booked and disable button
            products[productIndex].status = 'booked';
            const bookedBtn = document.getElementById(`booked-${productValue}`);
            if (bookedBtn){
                bookedBtn.disabled = true;
            }
            alert('Booked');//display "Booked"
            //Display updated products
            displayProducts(products);
            //reset form
        }
    })
