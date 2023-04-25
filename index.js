const apiUrl = "http://localhost:3000/Data"
//the apiUrl contains the api containing the db.json data
fetch(apiUrl)
.then(res=>res.json())
.then(data=>{
    const productsDiv = document.getElementById('products')
})