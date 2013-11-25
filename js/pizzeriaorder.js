//Interactive shopping cart


var subTotalPrice; //subtotal of items in cart

//Document on ready
$(function() {

	//Change title tag according to page
	var titleDisplay = 'Dawg Pizza:';
	var title = $('.title').html();
	document.title = titleDisplay + " " + title;

	//Populate menu
	var i; //iterator
	var pizza; //Current pizza iteration
	var pizzaName;
	var pizzaDescription;
	var pizzaType; //Meat or Vegetarian pizza type
	var place; //Location to append pizza
	for (i = 0; i < com.dawgpizza.menu.pizzas.length; i++) {
		pizza = com.dawgpizza.menu.pizzas[i];

		//Determine pizza type
		if(pizza.vegetarian) {
			pizzaType = 'vegetarian';
		} else {
			pizzaType = 'meat';
		}

		pizzaName = $(document.createElement('dt'));
		pizzaName.html(pizza.name);
		place = $(".col-md-6").find('.' + pizzaType); //Find appropriate column to append
		place.append(pizzaName);
		pizzaDescription = $(document.createElement('dd'));
		pizzaDescription.html(pizza.description);
		place.append(pizzaDescription);

		//Make buttons according to available pizza size options
		var pizzaButton;
		var j; //iterator
		for (j = 0; j < pizza.prices.length; j++) {
			pizzaButton = $(document.createElement('button'));
			pizzaButton.attr('type', 'button');
			pizzaButton.addClass('add-to-cart');
			pizzaButton.addClass('btn');
			pizzaButton.addClass('btn-warning');

			pizzaButton.attr('data-type', pizza.type);
			pizzaButton.attr('data-name', pizza.name); //name of item
			if (j == 0) {
				pizzaButton.attr('data-size', 'small'); 
			} else if (j == 1) {
				pizzaButton.attr('data-size', 'medium');
			} else {
				pizzaButton.attr('data-size', 'large');
			}
			pizzaButton.attr('data-price', pizza.prices[j]);
			pizzaButton.html("$" + pizza.prices[j]);
			place.append(pizzaButton);
		}
	}

	//Populate menu with drinks and desserts
	otherMenus("drinks");
	otherMenus("desserts");

	//Cart object. Stores customer information and all items added to cart.
	var cart = {
	    name: null,
	    address1: null,
	    address2: null,
	    zip: null,
	    phone: null,
	    items: [] //stores all items
	}; //Cart object

	//Adding item to cart
	//Constructs new single-in-cart item object, to be added to cart object.
	$('.add-to-cart').click(function(){
	    var newCartItem = {
	        type: this.getAttribute('data-type'),
	        name: this.getAttribute('data-name'),
	        size: this.getAttribute('data-size'),
	        price: this.getAttribute('data-price'),
	    };
        cart.items.push(newCartItem); //add item to cart
        renderCart(cart, $('.cart-display'));
	});

    //Clear cart contents
    $('.clear-cart').click(function(){
    	cart.items = [];
    	renderCart(cart, $('.cart-display'));
    });

	//Submitting orders and checking for requirements. Listens to <button type="submit".
	//Must have first name, last name, address line 1, zipcode, and phone number.
	$('.order-form').click(function() {
		var signupForm = $('.input-form'); //wrap raw DOM <form> into JQ object to use JQ methods on it
		
		var reqField;
		var reqValue;
		reqField = signupForm.find('input[name="name"]'); //Grab <input name="name">
		reqValue = reqField.val().trim(); //Grab its innerHTML
		if(0 === reqValue.length) {
			alert('Please enter a name.');
			return false;
		} else {
			cart.name = reqValue;
		}

		reqField = signupForm.find('input[name="addr-1"]');
		reqValue = reqField.val().trim(); 
		if(0 === reqValue.length) {
			alert('Please enter a delivery an address.');
			return false;
		} else {
			cart.address1 = reqValue;
		}

		//Address line 2 is optional
		reqField = signupForm.find('input[name="addr-2"]'); 
		reqValue = reqField.val().trim();
		if(0 < reqValue.length) {
			cart.address2 = reqValue;
		}

		reqField = signupForm.find('input[name="phone"]');
		reqValue = reqField.val().trim(); 
		if(0 === reqValue.length) {
			alert('Please enter a delivery an phone number.');
			return false;
		} else {
			cart.phone = reqValue;
		}

		reqField = signupForm.find('input[name="zip"]'); 
		reqValue = reqField.val().trim();
		if(0 === reqValue.length) {
			alert('Please enter a delivery an zip code.');
			return false;
		} else {
			cart.zip = reqValue;
		}

		if (subTotalPrice > 20.00) {
			postCart(cart, $('.cart-submit'))
		} else {
			alert('Online orders must have a minimum subtotal of $20.00.');
			return false;
		}
	});


	//Retrieve customer's previous address from local storage.
	var currAdd1;
	$("#addr-1").on('change', function(){
		currAdd1 = $("#addr-1").val();
    	localStorage.setItem('address1', currAdd1);
	});
	var prevAdd1 = localStorage.getItem('address1');
	var insertAdd1;
	if (prevAdd1 && prevAdd1.length > 0) {
		insertAdd1 = $('.input-form').find('input[name="addr-1"]')
    	insertAdd1.val(prevAdd1);
	}

	var currAdd2;
	$("#addr-2").on('change', function(){
		currAdd1 = $("#addr-2").val();
    	localStorage.setItem('address2', currAdd2);
	});
	var prevAdd2 = localStorage.getItem('address2');
	var insertAdd2;
	if (prevAdd2 && prevAdd2.length > 0) {
		insertAdd2 = $('.input-form').find('input[name="addr-2"]')
    	insertAdd2.val(prevAdd2);
	}

	var currZip;
	$("#zip").on('change', function(){
		currZip = $("#zip").val();
    	localStorage.setItem('zip', currZip);
	});
	var prevZip = localStorage.getItem('zip');
	var insertZip;
	if (prevZip && prevZip.length > 0) {
		insertZip = $('.input-form').find('input[name="zip"]')
    	insertZip.val(prevZip);
	}




}); //Document on ready



//Renders the current cart information to the screen
// parameters are:
//@param cart (object) - reference to the cart model
//@param container (jQuery object) - reference to the container <div>
function renderCart(cart, container) {
    var $template = $('.inCart-template'); 
    var $container = $('.cart-display'); //location to put filled item
    var removeButton; //button to click to remove item
    var index = 0;
    subTotalPrice = 0;
    var grandTotalPrice = 0;

    $container.hide(); //hide before fadeIn
    $container.empty(); //reset contents
    
    //For each item currently in the cart
    $.each(cart.items, function() {
        $instance = $template.clone(); //creates template to fill
        $instance.find('.inCart-name').html(this.name); //this = element in array currently iterating over
        $instance.find('.inCart-price').html(this.price);
        $instance.removeClass('inCart-template'); //make entry visible

        $('remove-from-cart').attr('data-index', index);

        $container.append(removeButton);
        $container.append($instance);
        index++;
        subTotalPrice = Number(subTotalPrice) + Number(this.price);
    })

    //Calculate subtotal, tax, and grand total
    $(".subTotal-price").html(Number(subTotalPrice).toFixed(2));
    $('.tax-price').html(Number(subTotalPrice * 0.095).toFixed(2));
    grandTotalPrice = (Number(subTotalPrice) + Number(subTotalPrice * 0.095)).toFixed(2);
    $('.grandTotal-price').html(grandTotalPrice);
    

    //Remove item from cart
	//Finds index of item to remove from cart's items array and removes it.
	$('.remove-from-cart').click(function(){	
	    var idxToRemove = this.getAttribute('data-index');
	    cart.items.splice(idxToRemove, 1);
        renderCart(cart, $('.cart-display'));
	});

    $container.fadeIn();
} //renderCart()



// Posts the cart model to the server using the supplied HTML form.
// parameters are:
//@param cart (object) - reference to the cart model
//@param cartForm (jQuery object) -reference to the HTML form
function postCart(cart, cartForm) {
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));

    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();
} //postCart()



//Populate menus according to passed menu type.
//@param menuType - drink or dessert menu to populate
function otherMenus(menuType) {
	var i; //iterator
	var item; //Current item iteration
	var itemName;
	var itemPrice;
	var place; //Location to append item
	var itemButton; //Button to click to add item to cart
	var br;
	for (i = 0; i < com.dawgpizza.menu[menuType].length; i++) {
	 	item = com.dawgpizza.menu[menuType][i];
	 	itemName = $(document.createElement('li'));
	 	itemName.html(item.name);
	 	itemName.addClass('inline');
	 	itemButton = $(document.createElement('button'));
		itemButton.addClass('add-to-cart');
		itemButton.addClass('sides-price');
		itemButton.addClass('btn');
		itemButton.addClass('btn-warning');
	 	itemButton.attr('type', 'button');
	 	itemButton.attr('data-type', item.type); //drink or dessert
	 	itemButton.attr('data-name', item.name); //name of item
	 	itemButton.attr('data-price', item.price); //price of item
	 	itemButton.html("$" + item.price);
	 	$('.' + menuType).append(itemName);
	 	$('.' + menuType).append(itemButton);
	 	br = $(document.createElement('br'));
	 	$('.' + menuType).append(br);

	}
} //otherMenus()