var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css";
fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.3.1/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);

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

	textNodeContainer1.append(textNode1);
	parentNode1.append(textNodeContainer1);

	//second row
	var parentNode2 = document.createElement("div");
	parentNode2.setAttribute("class", "parentNode");
	var textNode2 = document.createElement("h1");
	textNode2.setAttribute("class", "textNode");
	var textNodeContainer2 = document.createElement("div");
	textNodeContainer2.setAttribute("class", "textNodeContainer");

	textNodeContainer2.append(textNode2);
	parentNode2.append(textNodeContainer2);

	//third row
	var parentNode3 = document.createElement("div");
	parentNode3.setAttribute("class", "parentNode");
	var textNode3 = document.createElement("h1");
	textNode3.setAttribute("class", "textNode");
	var textNodeContainer3 = document.createElement("div");
	textNodeContainer3.setAttribute("class", "textNodeContainer");

	textNodeContainer3.append(textNode3);
	parentNode3.append(textNodeContainer3);

	//Fourth Row
	var parentNode4 = document.createElement("div");
	parentNode4.setAttribute("class", "parentNode");
	var textNode4 = document.createElement("h1");
	textNode4.setAttribute("class", "textNode");
	var textNodeContainer4 = document.createElement("div");
	textNodeContainer4.setAttribute("class", "textNodeContainer");

	textNodeContainer4.append(textNode4);
	parentNode4.append(textNodeContainer4);


	//Append rows to container
	valuePropsContainer.append(parentNode1);
	valuePropsContainer.append(parentNode2);
	valuePropsContainer.append(parentNode3);

	if (window.location.href.includes("neem-aloe-conditioner-main-tail-coat")) {
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Paraben-Free</span></i>";
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Calms Hives</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Helps prevent skin disorders</span></i>";
	}
	else if (window.location.href.includes("neem-shampoo")) {
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Sulfate-Free</span></i>";
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Naturally whitens and removes stains</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Quick-Rinse formula</span></i>";
	}
	else if (window.location.href.includes("equiderma-neem-aloe-natural-horse-spray-4-ounce-travel-size-deet-pyrethrin-free")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Fight against biting insects</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Protects skin from fungal and bacterial infection</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Great for Horse and Rider</span></i>";
	}
	else if (window.location.href.includes("neem-aloe-natural-horse-spray-32oz")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Fight against biting insects</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Protects skin from fungal and bacterial infection</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Great for Horse and Rider</span></i>";
	}
	else if (window.location.href.includes("gallon-equiderma-neem-fly-spray")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Fight against biting insects</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Protects skin from fungal and bacterial infection</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Great for Horse and Rider</span></i>";
	}
	else if (window.location.href.includes("sheath-udder-genital-cleanser-for-horses")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Quickly Melts Smegma</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Reduces inflammation, soothes skin and stimulates collagen</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Sulfate-Free</span></i>";
	}
	else if (window.location.href.includes("skin-lotion-for-horses")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Quickly treats Cannon Bone Crud</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Eliminates Rain Rot</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Removes Mallenders or Sallenders</span></i>";
	}
	else if (window.location.href.includes("wound-ointment")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Prevents Infection</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Amplifies healing and relieves pain</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Preserves viable tissue and minimizes scarring</span></i>";
		textNode4.innerHTML = "<i class='fas fa-check checkmark'><span>Repels Insects</span></i>";

		valuePropsContainer.append(parentNode4);
	}
	else if (window.location.href.includes("zinc-oxide-paste")) {
		textNode1.innerHTML = "<i class='fas fa-check checkmark'><span>Fights against Mud Fever</span></i>";
		textNode2.innerHTML = "<i class='fas fa-check checkmark'><span>Antibacterial, Antifungal, Antidermatophyte</span></i>";
		textNode3.innerHTML = "<i class='fas fa-check checkmark'><span>Provides 100% U/V Protection</span></i>";
	}

	document.querySelector("div[data-yotpo-element-id='5']").parentNode.insertBefore(valuePropsContainer, document.querySelector("div[data-yotpo-element-id='5']"));


});


