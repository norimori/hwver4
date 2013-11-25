<?php include("header.html"); ?>
<main>
	<div id="content-text">
		<h1 class="title">Menu</h1>
		<h2>- Menu -</h2>
		<div class="menu-cat">
			<h3 class="highlights">Pizzas</h3>
			<p class="inline">All our pizzas are made with hand-thrown thin crust, baked in real wood ovens. Choose from one of these sizes:</p>
			<ul class="cost" id="size">
				<li>Small (12")</li>
				<li>Medium (14")</li>
				<li>Large (17")</li>
			</ul>
			<p id="customize">All pizzas can be customized--add a few ingredients, or take a few off--for an extra $2.</p>
		</div>
		<div class="row">
			<div class="col-md-6">
				<h4>Meat Pies</h4>
				<dl class="meat">
					<!--Meat Pizzas populate here-->
				</dl>
			</div>
			<div class="col-md-6">
				<h4>Vegetarian Pies</h4>
				<dl class="vegetarian">
					<!--Vegetarian pizzas populate here-->
				</dl>
			</div>
		</div>
		<hr>
		<div class="center-text">
			<h3 class="highlights">Drinks</h3>
			<ul class="drinks">
				<!--Drink items populate here-->
			</ul>
			<hr>
			<h3 class="highlights">Dessert</h3>
			<ul class="desserts">
				<!--Desert items populate here-->
			</ul>
		</div>
	</div>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="js/pizzeria.js"></script>

<?php include("footer.html"); ?>