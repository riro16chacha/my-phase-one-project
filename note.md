THIS note.md Contains my first code that did not work well.







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
