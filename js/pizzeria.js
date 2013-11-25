//Dynamically add menu items to Dawg Pizza Menu.

//Document on ready

var grandTotalPrice = 0;

$(function() {
	//auto-play carousel
    $('.carousel').carousel();

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
			pizzaButton.html(pizza.prices[j]);
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
        console.log("YAY! You just added: " + newCartItem.name + " and its size is " + newCartItem.size + "(" + newCartItem.price + ")");

        renderCart(cart, $('.cart-display'));
	});

	//Submitting entire order to server
    $('.place-order').click(function(){
        
        //TODO: validate the cart to make sure all the required
        //properties have been filled out, and that the 
        //total order is greater than $20 (see homework 
        //instructions) 

        postCart(cart, $('.cart-form'));
    });

    //Clear cart contents
    $('.clear-cart').click(function(){
    	alert("Emptying cart...");
    	cart.items = [];
    });


	//Signup form is submitted. Listens to <button type="submit".
	$('.order-form').submit(function() {
		var signupForm = $(this); //wrap raw DOM <form> into JQ object to use JQ methods on it

		//(For Safari, IE9) Checks if "required" fields have a value. 
		var reqField;
		var reqValue;
		reqField = signupForm.find('input[name="first-name"]'); //Grab <input name="first-name">
		reqValue = reqField.val().trim(); //Grab its innerHTML
		if(0 === reqValue.length) {
			alert('Please enter a first name.');
			return false;
		}

		reqField = signupForm.find('input[name="last-name"]');
		reqValue = reqField.val().trim();
		if(0 === reqValue.length) {
			alert('Please enter a last name.');
			return false;
		}

		//If addr-1 has a value, zip must too
		var addr1Input = signupForm.find('input[name="addr-1"]'); //Select descendent <input name="addr-1"
		var addr1Value = addr1Input.val().trim(); //Gets current inner HTML of addrInput
		if (addr1Value && addr1Value.length > 0) { //If addrValue is not undefined and has content
			var zipInput = signupForm.find('input[name="zip"]');
			var zipValue = zipInput.val().trim();
			if (zipValue && zipValue.length > 0) {
				return true;
			} else {
				alert('Please enter a zip code.');
				return false;
			}
		}

		reqField = signupForm.find('input[name="phone"]');
		reqValue = reqField.val().trim();
		if(0 === reqValue.length) {
			alert('Please enter a phone number.');
			return false;
		}

		if(grandTotalPrice < 20) {
			alert("Online orders must be at least $20.00");
			return false;
		}

	}); //Submit form submit


}); //Document on ready



// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
function renderCart(cart, container) {
    var $template = $('.inCart-template'); 
    var $container = $('.cart-display'); //location to put filled item
    var removeButton; //button to click to remove item
    var index = 0;
    var subTotalPrice = 0;

    $container.hide(); //hide before fadeIn
    $container.empty(); //reset contents
    
    //For each item currently in the cart
    $.each(cart.items, function() {
        $instance = $template.clone(); //creates template to fill
        $instance.find('.inCart-name').html(this.name); //this = element in array currently iterating over
        $instance.find('.inCart-price').html("$" + this.price);

        $instance.removeClass('inCart-template'); //make entry visible

        removeButton = $(document.createElement('button'));
        removeButton.attr('type', 'button');
        removeButton.attr('data-index', index);
        removeButton.html(' X ');
        removeButton.addClass('remove-from-cart');

        $container.append(removeButton);
        $container.append($instance);
        index++;
        subTotalPrice = Number(subTotalPrice) + Number(this.price);
    })

    //Calculate subtotal, tax, and grand total
    subTotal = $(document.createElement('p'));
    subTotal.html("SubTotal: " + Number(subTotalPrice).toFixed(2));
   $container.append(subTotal);
    var tax = $(document.createElement('p'));
    tax.html("Tax: " + Number(subTotalPrice * 0.095).toFixed(2));
    $container.append(tax);
    grandTotal = $(document.createElement('p'));
    grandTotalPrice = (Number(subTotalPrice) + Number(subTotalPrice * 0.095)).toFixed(2);
    grandTotal.html("Total: " + grandTotalPrice);
    $container.append(grandTotal);
    

    //Remove item from cart
	//Finds index of item to remove from cart's items array and removes it.
	$('.remove-from-cart').click(function(){	
	    var idxToRemove = this.getAttribute('data-index');
	    cart.items.splice(idxToRemove, 1);
        renderCart(cart, $('.cart-display'));
	});

    $container.fadeIn();
} //renderCart()




// postCart()
// posts the cart model to the server using
// the supplied HTML form
// parameters are:
//  - cart (object) reference to the cart model
//  - cartForm (jQuery object) reference to the HTML form
//
function postCart(cart, cartForm) {
    //find the input in the form that has the name of 'cart'    
    //and set it's value to a JSON representation of the cart model
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));

    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();

} //postCart()



















//Populate menus according to passed menu type.
//@param - menuType to populate
function otherMenus(menuType) {
	var i; //iterator
	var item; //Current item iteration
	var itemName;
	var itemPrice;
	var place; //Location to append item
	var itemButton; //Button to click to add item to cart
	for (i = 0; i < com.dawgpizza.menu[menuType].length; i++) {
	 	item = com.dawgpizza.menu[menuType][i];
	 	itemName = $(document.createElement('li'));
	 	itemName.html(item.name);
	 	itemButton = $(document.createElement('button'));
		itemButton.addClass('add-to-cart');
	 	itemButton.attr('type', 'button');
	 	itemButton.attr('data-type', item.type); //drink or dessert
	 	itemButton.attr('data-name', item.name); //name of item
	 	itemButton.attr('data-price', item.price); //price of item
	 	itemButton.html(item.price);
	 	$('.' + menuType).append(itemName);
	 	$('.' + menuType).append(itemButton);
	}
};

