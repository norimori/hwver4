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




			<div class="col-md-6"> <!-- Cart and Customer Display -->
                <h3>Your Cart</h3>
                <button type="button" class="btn clear-cart">Clear Cart</button>
                <div class="cart-display"></div>
               

                <h3>Delivery Info</h3>
                <form class="form-horizontal order-form" role="form">
                	<input class="submit-order"
                	$('submit-order').submit();
	                <div class="form-group">
	                    <label class="col-lg-2 control-label" for="first-name">Name:</label>
	                    <div class="col-lg-5">
	                        <input type="text" class="form-control" name="name" id="name" placeholder="name" required>
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label class="col-lg-2 control-label" for="addr-1">Address:</label>
	                    <div class="col-lg-10">
	                        <input type="text" class="form-control" name="addr-1" id="addr-1" placeholder="street address">
	                        <input type="text" class="form-control" name="addr-2">
	                        <input type="text" class="form-control" name="addr-3">
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label class="col-lg-2 control-label" for="phone">Phone:</label>
	                    <div class="col-lg-10">
	                        <input type="tel" class="form-control" name="phone" id="phone" placeholder="primary phone number">
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="col-lg-12 text-right">
	                        <button type="submit" class="btn btn-primary">Submit Order</button>
	                    </div>
	                </div>
               </form>

               <!-- Submit pizza cart order -->
               <form class="cart-form" action="http://dawgpizza.com/orders/" method="POST">
					<input class="submit-order" type="hidden" name="cart">
				</form>
			</div> <!-- Cart and Customer Display -->



			<div class="inCart-template"><!-- Cart item template. Hidden until items added -->
				<p class="inCart-name inline"></p>
				<p class="inCart-price inline"><p>
			</div>

		</div>


	</div>
</main>

<?php include("footer.html"); ?>