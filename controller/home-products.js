var productsTable = document.getElementById("products-table");

/**
 * Called when the products loading request succeeded.
 * @param request The request object.
 */
function onProductsLoaded(request) {
	//Remove the outdated product entries.
	productsTable.innerHTML = "";

	var products = JSON.parse(request.responseText);
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
 * Called when the delete button is pressed on one of the product table rows.
 * @param event The event object.
 */
function onDeleteButtonPressed(event) {
	var sku = event.currentTarget.getAttribute("product-sku");
	if (!confirm("Are you sure that you want to delete the product with the SKU " + sku + "?")) {
		return;
	}

	sendRequest("DELETE", "API/V1/Product/" + sku, onProductDeleted, onProductDeletionError);
}

/**
 * Called when the products deletion request succeeded.
 * @param request The request object.
 */
function onProductDeleted(request) {
	refreshProducts();
}

/**
 * Called when the products deletion request failed.
 * @param request The request object.
 */
function onProductDeletionError(request) {
	alert("The product could not be deleted. Please try again!");
}

/**
 * Refreshes the products table with the newest product list from the API.
 */
function refreshProducts() {
	sendRequest("GET", "API/V1/Products", onProductsLoaded, onProductsLoadingError);
}

//Load the products initially.
refreshProducts();