<?php $page_title = "Home ★ Productive"; ?>
<?php require "view/blocks/page_start.php"; ?>
<h1>Welcome to Productive!</h1>
<h2>Popular Products</h2>
<div style="margin-bottom: 2em;">
	<a href="product.php" class="button">Create New Product</a>
</div>
<table>
	<thead>
		<tr>
			<th>SKU</th>
			<th>Name</th>
			<th>Price</th>
			<th>Stock</th>
		</tr>
	</thead>
	<tbody id="products-table"></tbody>
</table>

<script src="controller/home-products.js"></script>
<?php require "view/blocks/page_end.php"; ?>