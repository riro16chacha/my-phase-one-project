const apiUrl = "http://localhost:3000/Data"
//the apiUrl contains the api containing the db.json data
fetch(apiUrl)
.then(res=>res.json())
.then(data=>{
    const productsDiv = document.getElementById('products');
    //This gets the div container to store all the products
    let html = '';
    data.forEach(product => {
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
})