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
    // get the book form and the book button
const bookForm = document.getElementById("book-form");
const bookButton = document.getElementById("book-button");

// add an event listener to the book button
bookButton.addEventListener("click", function(event) {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // display a message at the top saying "booked successfully"
  const message = document.createElement("p");
  message.innerText = "Booked successfully";
  message.style.backgroundColor = "green";
  message.style.color = "white";
  message.style.padding = "10px";
  message.style.textAlign = "center";
  const header = document.getElementById("h1");
  header.parentNode.insertBefore(message, header.nextSibling);

  // reset the form
  bookForm.reset();
});

    // Function that displays products
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
