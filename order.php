<?php include("header.html"); ?>
<main>
	<div id="content-text">
		<h1 class="title">Order Online</h1>
		<h2>- Order Online -</h2>
		<div class="menu-cat">
			<p>
				We deliver only within the <span class='bold'>Seattle</span> city limits.
			</p>
			<p>
				Delivery times: <span class="bold">Noon - 11:00PM</span>
			</p>
			<p>
				Delivery is free! But orders must be a <span class="bold">minimum of $20</span>.
			</p>
			<p>
				We accept <span class="bold">cash or credit cards</span> on delivery.
			</p>
			<p>
				We don't deliver our custom pizzas, so if you want to try one out, come eat in!	
			</p>
		</div>


		<div class="row">
			<div class="col-md-6 allItems"> <!-- Menu Display-->
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
				<div class="row">
					<div class="col-xs-8 no-pad-left">
	                	<h3 class="inline yourStuff">Your Cart</h3>
	                </div>
	                <div class="col-xs-4">
	                	<button type="button" class="btn btn-danger inline clear-cart">Clear Cart</button>
	                </div>
	            </div>
                <div class="cart-display"></div>
                <div class="cost-display">
                	<div class="row subTotal-row">
                		<div class="col-xs-8">SubTotal:</div>
                		<div class="col-xs-4">
							$<span class="subTotal-price">0.00</span>
						</div>
                	</div>

                	<div class="row">
                		<div class="col-xs-8">Tax:</div>
                		<div class="col-xs-4">
							$<span class="tax-price">0.00</span>
						</div>
                	</div>

                	<div class="row">
                		<div class="col-xs-8">Total:</div>
                		<div class="col-xs-4">
							$<span class="grandTotal-price">0.00</span>
						</div>
                	</div>                	                	
                </div>

                <hr>
               
                <h3 class="yourStuff delivery">Delivery Info</h3>
                <form class="form-horizontal input-form" role="form">
	                <div class="form-group">
	                    <label class="col-lg-2 control-label" for="name">Name:</label>
	                    <div class="col-lg-5">
	                        <input type="text" class="form-control" name="name" id="name" placeholder="name" required>
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label class="col-lg-2 control-label" for="addr-1">Address:</label>
	                    <div class="col-lg-10">
	                        <input type="text" class="form-control" name="addr-1" id="addr-1" placeholder="street address" required>
	                        <input type="text" class="form-control" name="addr-2">
	                        <input type="text" class="form-control" name="zip" placeholder="zip code" required>
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label class="col-lg-2 control-label" for="phone">Phone:</label>
	                    <div class="col-lg-10">
	                        <input type="tel" class="form-control" name="phone" id="phone" placeholder="primary phone number" required>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="col-lg-12 text-center">
	                        <button type="button" class="btn btn-success btn-lg order-form">Place Order</button>
	                    </div>
	                </div>
               </form>

               <!-- Submit pizza cart order -->
               <form class="cart-submit" action="http://dawgpizza.com/orders/" method="POST">
					<input type="hidden" name="cart">
				</form>
			</div> <!-- Cart and Customer Display -->



			<div class="inCart-template"><!-- Cart item template. Hidden until items added -->
            	<div class="row">
            		<div class="col-xs-1">
            			<button class="remove-from-cart btn btn-danger btn-xs">X</button>
            		</div>
            		<div class="col-xs-7 inCart-name inline"></div>
            		<div class="col-xs-3">
						$<span class="inCart-price"></span>
					</div>
            	</div>				
			</div>

		</div>


	</div>
</main>        
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="js/pizzeriaorder.js"></script>

<?php include("footer.html"); ?>