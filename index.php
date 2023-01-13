<?php $page_title = "Home ★ Productive"; ?>
<?php require "view/blocks/page_start.php"; ?>
<h1>Welcome to Productive!</h1>
<h2>Popular Products</h2>
<div style="margin-bottom: 2em;">
	<b>Sortiert nach: </b>  
	<select id="sort-direction">
		<option> None </option>  
		<option value="category"> Kategorie </option>  
		<option value="ascending"> Namen ↓ </option>  
		<option value="descending"> Namen ↑ </option>
	</select>  
</div>
<table>
	<thead>
		<tr>
			<th>SKU</th>
			<th>Name</th>
			<th>Category_Id</th>
			<th>Price</th>
			<th>Stock</th>
			<th>Logo</th>
		</tr>
	</thead>
	<tbody id="products-table"></tbody>
</table>

<script src="controller/home-products.js"></script>
<?php require "view/blocks/page_end.php"; ?>