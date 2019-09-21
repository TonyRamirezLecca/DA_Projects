/* When exists for single element */
function whenExists(element, callback) {
	var interval = setInterval(function() {
		if (document.querySelectorAll(element).length) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}
whenExists("div[data-yotpo-element-id='5']", function() {
		var valuePropsContainer = document.createElement("div");
		valuePropsContainer.setAttribute("class", "valuePropsContainer");

	//first row
		var parentNode1 = document.createElement("div");
		parentNode1.setAttribute("class", "parentNode");
		var textNode1 = document.createElement("h1");
		textNode1.setAttribute("class", "textNode");
		var textNodeContainer1 = document.createElement("div");
		textNodeContainer1.setAttribute("class", "textNodeContainer");
		var img1 = document.createElement("img");
		var imgContainer1 = document.createElement("div");
		imgContainer1.setAttribute("class", "imgContainer");
		imgContainer1.append(img1);
		img1.src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/equiderma/pdp-value-props/medic.png";

		textNodeContainer1.append(textNode1);
		parentNode1.append(imgContainer1);
		parentNode1.append(textNodeContainer1);

	//second row
		var parentNode2 = document.createElement("div");
		parentNode2.setAttribute("class", "parentNode");
		var textNode2 = document.createElement("h1");
		textNode2.setAttribute("class", "textNode");
		var textNodeContainer2 = document.createElement("div");
		textNodeContainer2.setAttribute("class", "textNodeContainer");
		var img2 = document.createElement("img");
		var imgContainer2 = document.createElement("div");
		imgContainer2.setAttribute("class", "imgContainer");
		imgContainer2.append(img2);
		img2.src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/equiderma/pdp-value-props/horse.png";

		textNodeContainer2.append(textNode2);
		parentNode2.append(imgContainer2);
		parentNode2.append(textNodeContainer2);

	//third row
		var parentNode3 = document.createElement("div");
		parentNode3.setAttribute("class", "parentNode");
		var textNode3 = document.createElement("h1");
		textNode3.setAttribute("class", "textNode");
		var textNodeContainer3 = document.createElement("div");
		textNodeContainer3.setAttribute("class", "textNodeContainer");
		var img3 = document.createElement("img");
		var imgContainer3 = document.createElement("div");
		imgContainer3.setAttribute("class", "imgContainer");
		imgContainer3.append(img3);
		img3.src = "https://disruptive-advertising.s3-us-west-2.amazonaws.com/equiderma/pdp-value-props/heart.png";

		textNodeContainer3.append(textNode3);
		parentNode3.append(imgContainer3);
		parentNode3.append(textNodeContainer3);


	//Append rows to container
		valuePropsContainer.append(parentNode1);
		valuePropsContainer.append(parentNode2);
		valuePropsContainer.append(parentNode3);

	if (window.location.href.includes("neem-aloe-conditioner-main-tail-coat")) {
		textNode2.innerHTML = "Paraben-Free";
		textNode1.innerHTML = "Calms Hives";
		textNode3.innerHTML = "Helps prevent skin disorders";
	}
	else if (window.location.href.includes("neem-shampoo")) {
		textNode2.innerHTML = "Sulfate-Free";
		textNode1.innerHTML = "Naturally whitens and removes stains";
		textNode3.innerHTML = "Quick-Rinse formula";
	}
	else if (window.location.href.includes("equiderma-neem-aloe-natural-horse-spray-4-ounce-travel-size-deet-pyrethrin-free")) {
		textNode1.innerHTML = "Fight against biting insects";
		textNode2.innerHTML = "Protects skin from fungal and bacterial infection";
		textNode3.innerHTML = "Great for Horse and Rider";
	}
	else if (window.location.href.includes("neem-aloe-natural-horse-spray-32oz")) {
		textNode1.innerHTML = "Fight against biting insects";
		textNode2.innerHTML = "Protects skin from fungal and bacterial infection";
		textNode3.innerHTML = "Great for Horse and Rider";
	}
	else if (window.location.href.includes("gallon-equiderma-neem-fly-spray")) {
		textNode1.innerHTML = "Fight against biting insects";
		textNode2.innerHTML = "Protects skin from fungal and bacterial infection";
		textNode3.innerHTML = "Great for Horse and Rider";
	}
	else if (window.location.href.includes("sheath-udder-genital-cleanser-for-horses")) {
		textNode1.innerHTML = "Quickly Melts Smegma";
		textNode2.innerHTML = "Reduces inflammation, soothes skin and stimulates collagen";
		textNode3.innerHTML = "Sulfate-Free";
	}
	else if (window.location.href.includes("skin-lotion-for-horses")) {
		textNode1.innerHTML = "Quickly treats Cannon Bone Crud";
		textNode2.innerHTML = "Eliminates Rain Rot";
		textNode3.innerHTML = "Removes Mallenders or Sallenders";
	}
	else if (window.location.href.includes("wound-ointment")) {
		textNode1.innerHTML = "Prevents Infection";
		textNode2.innerHTML = "Relieves Pain";
		textNode3.innerHTML = "Preserves viable tissue and minimizes scarring";
	}
	else if (window.location.href.includes("zinc-oxide-paste")) {
		textNode1.innerHTML = "Fights against Mud Fever";
		textNode3.innerHTML = "Provides 100% U/V Protection";
		textNode2.innerHTML = "Antibacterial, Antifungal, Antidermatophyte";
	}

	document.querySelector("div[data-yotpo-element-id='5']").parentNode.insertBefore(valuePropsContainer, document.querySelector("div[data-yotpo-element-id='5']"));


});


