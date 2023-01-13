var productsTable = document.getElementById("products-table");
const sortDirectionSelect = document.getElementById('sort-direction');

/**
 * Called when the products loading request succeeded.
 * @param request The request object.
 */
function onProductsLoaded(request) {
  // Remove the outdated product entries.
  productsTable.innerHTML = "";

  var products = JSON.parse(request.responseText);

  // Sort the products by name and category.
  const sortDirection = sortDirectionSelect.value;
  if (sortDirection === 'ascending') {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } 
  else if (sortDirection === 'descending') {
    products.sort((a, b) => b.name.localeCompare(a.name));
  } 
  else if (sortDirection === 'category') {
    products = products.filter(product => product.id_category !== null);
    products.sort((a, b) =>  {
      if(b.id_category > a.id_category) {
        return -1;
      }
      if (a.id_category > b.id_category) {
        return 1;
      }
      return 0;
    });
  }

  // Iterate through the sorted products and add them to the table.
  for (var i = 0; i < products.length; i++) {
    if (products[i].active == 1) {  
      	var productRow = document.createElement("tr");
     	productsTable.appendChild(productRow);

		var skuCell = document.createElement("td");
		skuCell.innerText = products[i].sku;
		productRow.appendChild(skuCell);

		var nameCell = document.createElement("td");
		nameCell.innerText = products[i].name;
		productRow.appendChild(nameCell);

		var categoryIdCell = document.createElement("td");
		categoryIdCell.innerText = products[i].id_category ? products[i].id_category : "-";
		productRow.appendChild(categoryIdCell);

		var priceCell = document.createElement("td");
		priceCell.innerText = products[i].price ? "CHF " + products[i].price : "";
		productRow.appendChild(priceCell);

		if (products[i].stock <= 3) {
			var stockCell = document.createElement("td");
			stockCell.innerText = products[i].stock;
			stockCell.className = "stock";
			productRow.appendChild(stockCell);
		}
		else {
			var stockCell = document.createElement("td");
			stockCell.innerText = products[i].stock;
			productRow.appendChild(stockCell);
     	}

		var imageCell = document.createElement("td");
		var image = document.createElement("img");
		image.src = products[i].product_image;
    image.className = "imageShow";
		imageCell.appendChild(image);
		productRow.appendChild(imageCell);
    }
  }
}



/**
 * Called when the products loading request failed.
 * @param request The request object.
 */
function onProductsLoadingError(request) {
	//Do noting if it is a 401 error, since the login form will already be shown at this point.
	if (request.status == 401) {
		return;
	}

	alert("Error: " + request.statusText);
}
/**
 * Refreshes the products table with the newest product list from the API.
 */
function refreshProducts() {
	sendRequest("GET", "API/V1/Products", onProductsLoaded, onProductsLoadingError);
}

//Load the products initially.
refreshProducts();

sortDirectionSelect.addEventListener('change', refreshProducts);
