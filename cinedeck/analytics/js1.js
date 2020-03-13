<script>
	/* Selects Get Estimate Section */
	var regex = /Trial/i;
var Purchased_Trial = false;
var Purchased_Product = false;
document.querySelectorAll('.sc-module table:nth-child(2) > tbody > tr > td:first-child > div > span').forEach((el, i, arr) => {
	if (regex.test(el.innerHTML)) {
		Purchased_Trial = true;;
		return;
	}
	else {
		Purchased_Product = true;
	}
});

if (Purchased_Trial) {
	dataLayer.push({'event': 'purchase_trial'});
}

if (Purchased_Product) {
	dataLayer.push({'event': 'purchase_product'});
}
	</script>


	dataLayer.forEach(el => {
		if (el.event == "sc.ecommerce") {
			let arrayOfObjects = [];
			el.ecommerce.checkout.products.forEach((element) => {
				newObject = {
					"ProductID" : element.id,
					"ProductName" : element.name,
					"Quantity" : element.quantity,
					"ItemPrice" : element.price
				}
				arrayOfObjects.push(newObject);
			});
			return arrayOfObjects;
		}
	});




//Add to cart!
//fire on /cart page
//https://cinextools.scaledcommerce.com/cart
<script type="text/javascript">
	_learnq.push(["track", "Added to Cart", {
		"$value": {{Cart Value}},
		"AddedItem_ProductName": {{dlv - added item product name}},
		"AddedItem_ProductID": {{dlv - added item product ID}},
		"AddedItem_Price": {{dlv - added item price}},
		"AddedItem_Quantity": {{dlv - added item quantity}},
		"ItemNames": {{dlv - cart item names}},
	]
	}]);
</script>


	//Started Checkout
	//fire on /review
	//https://cinextools.scaledcommerce.com/orders/0855-7955-6165/review
	<script type="text/javascript">
	_learnq.push(["track", "Started Checkout", {
		"$event_id": {{checkout event ID}} + new Date().getTime(),
		"$value": {{Checkout Value}},
		"ItemNames": {{dlv - checkout item names}},
		"CheckoutURL": 'https://cinextools.scaledcommerce.com/orders/' + {{checkout event ID}} + '/review',
		"Items": {{dlv - checkout items list}}
	}]);
</script>

	_learnq.push(["track", "Added to Cart", {
		"$value": {{Cart Value}},
		"AddedItem_ProductName": {{dlv - added item product name}},
		"AddedItem_ProductID": {{dlv - added item product ID}},
		"AddedItem_Price": {{dlv - added item price}},
		"AddedItem_Quantity": {{dlv - added item quantity}},
		"ItemNames": {{dlv - cart item names}},
		"CheckoutURL": "http://www.example.com/path/to/checkout"
	}]);




function getProductNames(){
	var total = document.querySelectorAll('.float-right')[1].innerText;
	total = total.replace(/\$|,/g, '');
	return total
}
