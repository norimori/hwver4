<?php include("header.html"); ?>
	<main>
		<div id="pawnee-carousel" class="carousel slide">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#pawnee-carousel" data-slide-to="0" class="active"></li>
				<li data-target="#pawnee-carousel" data-slide-to="1"></li>
				<li data-target="#pawnee-carousel" data-slide-to="2"></li>
			</ol>
			<!-- Slides -->
			<div class="carousel-inner">
				<div class="item active">
					<img src="img/pizza1.jpg" alt="Pizza Photo">
					<div class="carousel-caption">
						<h1>Our Delicious Pizzas</h1>
					</div>
				</div>
				<div class="item">
					<img src="img/pizza-order.jpg" alt="Pizza Order Photo">
					<div class="carousel-caption">
						<h1>Order Up!</h1>
					</div>
				</div>
				<div class="item">
					<img src="img/pizza-oven.jpg" alt="Pizza Oven Photo">
					<div class="carousel-caption">
						<h1>Crispy and Juicy</h1>
					</div>
				</div>
			</div> <!-- Slides -->
		    <!-- Left-right controls -->
		    <a class="left carousel-control" href="#pawnee-carousel" data-slide="prev">
		        <span class="icon-prev"></span>
		    </a>
		    <a class="right carousel-control" href="#pawnee-carousel" data-slide="next">
		        <span class="icon-next"></span>
		    </a>
		</div> <!-- Close carousel -->

		<div id="content-text" class="center-text">
			<h1 class="title">Home</h1>
			<h1>We are...<img class="we-are" src="img/logo.png" alt="logo"></h1>
			<p>Awesome wood-fired pizza with fresh ingredients baked to order. Come in and eat, or call us for delivery!</p>
			<div class="highlights">
				Email: <a href="mailto:dawgpizza@gmail.com">dawgpizza@gmail.com</a><br>
				Follow us on Twitter: <a href="https://twitter.com/DawgPizzaSea" class="twitter-follow-button" data-show-count="false">Follow @DawgPizzaSea</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			</div>
			<hr>
			<div id="pizzavid">
				<p>A peak into how we make our pizzas:</p>
				<iframe id="video" width="420" height="315" src="//www.youtube.com/embed/HWL__9yDu8I" allowfullscreen></iframe>
			</div>
			<div id="pizzavid-link">
				<a href="http://www.youtube.com/watch?v=HWL__9yDu8I" target="_blank"><p>VIDEO: Click here for a sneak peak into how we make our pizzas!</p></a>
			</div>
		</div>
	</main>

<?php include("footer.html"); ?>