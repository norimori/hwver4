<?php include("header.html"); ?>
<main>
	<div id="content-text">
		<h1 class="title">Order Online</h1>
		<h2>- Order Online -</h2>
		<div class="menu-cat">
			<p>
				We deliver only within the Seattle city limits.
			</p>
			<p>
				Delivery times: Noon - 11:00PM
			</p>
			<p>
				Delivery is free! But orders must be a minimum of $20.
			</p>
			<p>
				We accept cash or credit cards on delivery.
			</p>
			<p>
				We don't deliver our custom pizzas, so if you want to try one out, come eat in!	
			</p>
		</div>


		<div class="row">
			<div class="col-md-6"> <!-- Menu Display-->
				<h3 class="highlights">Meat Pizzas</h3>
				<dl class="meat">
					<!--Meat Pizzas populate here-->
				</dl>

				<h3 class="highlights">Vegetarian Pizzas</h3>
				<dl class="vegetarian">
					<!--Vegetarian pizzas populate here-->
				</dl>

				<hr>

				<h3 class="highlights">Drinks</h3>
				<ul class="drinks">
					<!--Drink items populate here-->
				</ul>

				<hr>

				<h3 class="highlights">Dessert</h3>
				<ul class="desserts">
					<!--Desert items populate here-->
				</ul>
			</div> <!-- Menu Display -->




			<div class="col-md-6"> <!-- Cart Display -->
                <h3>Your Cart</h3>
                <div class="cart-display"></div>
			</div> <!-- Cart Display -->

			<div class="inCart-template">
				<button class=".remove-from-cart" type="button"> X </button>
				<p class="inCart-name inline"></p>
				<p class="inCart-price inline"><p>
			</div>
		</div>


	</div>
</main>

<?php include("footer.html"); ?>