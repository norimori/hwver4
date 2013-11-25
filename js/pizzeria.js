//Dynamically add menu items to Dawg Pizza Menu.

//Document on ready
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

		//Get prices of pizza
		var prices = "$" + pizza.prices[0];
		var j; //iterator
		for (j = 1; j < pizza.prices.length; j++) {
			prices = prices + "/$" + pizza.prices[j];
		}
		pizzaCost = $(document.createElement('dd'));
		pizzaCost.html(prices);
		pizzaCost.addClass('cost');
		place.append(pizzaCost);
	}

	//Populate menu with drinks and desserts
	otherMenus("drinks");
	otherMenus("desserts");
}); //Document on ready

//Populate menus according to passed menu type.
//@param - menuType to populate
function otherMenus(menuType) {
	var i; //iterator
	var item; //Current item iteration
	var itemName;
	var itemPrice;
	var place; //Location to append item
	for (i = 0; i < com.dawgpizza.menu[menuType].length; i++) {
	 	item = com.dawgpizza.menu[menuType][i];
	 	itemName = $(document.createElement('li'));
	 	itemName.html(item.name);
	 	$('.' + menuType).append(itemName.append($('<span/>', {text: ' $' + item.price})));
	 	$('.' + menuType + ' span').addClass('cost');
	}
};