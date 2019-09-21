var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.3.1/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);

function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function () {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				elements.splice(i, 1);
				i--;
			}
		}
		if (elements.length === 0) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists('#looxReviews', function () {
	if (window.location.href.includes('/products/')) {
		var looxReviews = document.querySelector('#looxReviews');
		var accContent = [
			{},
			{row: "1", tireSize:"37x12.50R17LT", serviceDesc:"124P", loadRange:"D", sideWall:"BLK", appRimWidth:"8.5 - 11", measRimWidth:"10",  sectionWidth:"13.1", overallDiam:"36.89", treadWidth:"10.35", tireWeight:"79.2", maxLoad:"3525 lbs.", treadDepth:"18.5", maxPSI:"50 PSI"},
			{row: "2", tireSize:"LT315/70R17", serviceDesc:"121/118Q", loadRange:"D", sideWall:"BLK", appRimWidth:"8 - 11", measRimWidth:"9.5",  sectionWidth:"12.8", overallDiam:"34.57", treadWidth:"10.00", tireWeight:"65.78", maxLoad:"3195 lbs.", treadDepth:"18.5", maxPSI:"50 PSI"},
			{row: "3", tireSize:"LT305/70R18", serviceDesc:"126/123Q", loadRange:"E", sideWall:"BLK", appRimWidth:"8.5 - 10", measRimWidth:"9",  sectionWidth:"12.5", overallDiam:"35.08", treadWidth:"10.00", tireWeight:"71.28", maxLoad:"3750 lbs.", treadDepth:"18.5", maxPSI:"65 PSI"},
			{row: "4", tireSize:"35x12.50R20LT", serviceDesc:"121Q", loadRange:"E", sideWall:"BLK", appRimWidth:"8.5 - 11", measRimWidth:"10",  sectionWidth:"12.5", overallDiam:"34.65", treadWidth:"10.00", tireWeight:"68.20", maxLoad:"3195 lbs.", treadDepth:"18.5", maxPSI:"65 PSI"},
			{row: "5", tireSize:"LT275/70R18", serviceDesc:"125/122Q", loadRange:"E", sideWall:"BLK", appRimWidth:"7 - 8.5", measRimWidth:"8",  sectionWidth:"11.1", overallDiam:"33.11", treadWidth:"8.98", tireWeight:"60.94", maxLoad:"3640 lbs.", treadDepth:"18.5", maxPSI:"80 PSI"},
			{row: "6", tireSize:"LT305/55R20", serviceDesc:"121/118Q", loadRange:"E", sideWall:"BLK", appRimWidth:"8.5 - 11", measRimWidth:"9.5",  sectionWidth:"12.5", overallDiam:"33.43", treadWidth:"10.28", tireWeight:"66.00", maxLoad:"3195 lbs.", treadDepth:"18.5", maxPSI:"65 PSI"},
			{row: "7", tireSize:"LT315/75R16", serviceDesc:"127/124Q", loadRange:"E", sideWall:"BLK", appRimWidth:"8 - 11", measRimWidth:"8.5",  sectionWidth:"12.5", overallDiam:"34.45", treadWidth:"10.00", tireWeight:"67.76", maxLoad:"3860 lbs.", treadDepth:"18.5", maxPSI:"65 PSI"},
			{row: "8", tireSize:"LT285/75R16", serviceDesc:"126/123Q", loadRange:"E", sideWall:"BLK", appRimWidth:"7.5 - 9", measRimWidth:"8",  sectionWidth:"11.7", overallDiam:"32.87", treadWidth:"9.29", tireWeight:"57.89", maxLoad:"3750 lbs.", treadDepth:"18.5", maxPSI:"80 PSI"},
			{row: "9", tireSize:"37x13.50R20LT", serviceDesc:"127Q", loadRange:"E", sideWall:"BLK", appRimWidth:"8.5 - 11", measRimWidth:"11",  sectionWidth:"13.5", overallDiam:"36.69", treadWidth:"10.79", tireWeight:"82.28", maxLoad:"3860 lbs.", treadDepth:"18.5", maxPSI:"65 PSI"},
			{row: "10", tireSize:"37x13.50R22LT", serviceDesc:"123Q", loadRange:"E", sideWall:"BLK", appRimWidth:"8.5 - 12", measRimWidth:"11",  sectionWidth:"13.4", overallDiam:"36.73", treadWidth:"10.79", tireWeight:"84.04", maxLoad:"3415 lbs.", treadDepth:"18.5", maxPSI:"65 PSI"}
		]

		/*Accordian Sections*/
		var tiresSection1 = document.createElement("div"); tiresSection1.classList.add("tiresSection");
		var tiresSection2 = document.createElement("div"); tiresSection2.classList.add("tiresSection");
		var tiresSection3 = document.createElement("div"); tiresSection3.classList.add("tiresSection");
		var tiresSection4 = document.createElement("div"); tiresSection4.classList.add("tiresSection");
		var tiresSection5 = document.createElement("div"); tiresSection5.classList.add("tiresSection");

		var accordianWrapper = document.createElement("div"); accordianWrapper.classList.add("accordianWrapper");
		accordianWrapper.append(tiresSection1); accordianWrapper.append(tiresSection2); accordianWrapper.append(tiresSection3); accordianWrapper.append(tiresSection4); accordianWrapper.append(tiresSection5); 

		accordianWrapper.querySelectorAll('div').forEach((element, index, array) => {
			switch (index) {
				case 0:
					var sectionTitle = document.createElement("div"); sectionTitle.classList.add("sectionTitle");
					sectionTitle.innerHTML = '<h1>16" WHEELS</h1><i class="fas fa-angle-up arrow"/>';

					var descriptionRow = document.createElement("div"); descriptionRow.classList.add("descriptionRow");
					descriptionRow.innerHTML = '<h6>TIRE SIZE</h6><h6>SERVICE<br/>DESCRIPTION</h6><h6>LOAD<br/>RANGE</h6><h6>SIDE<br/>WALL</h6><h6>APPROVED<br/>RIM WIDTH</h6><h6>MEASURED<br/>RIM WIDTH</h6><h6>SECTION<br/>WIDTH</h6><h6>OVERALL<br/>DIAMETER</h6><h6>TREAD<br/>WIDTH</h6><h6>TIRE<br/>WEIGHT</h6><h6>MAX<br/>LOAD</h6><h6>TREAD<br/>DEPTH</h6><h6>MAX TIRE<br/>PRESSURE</h6><h6>&nbsp;</h6>';

					var firstRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[7];
					firstRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/lt31575r16">Buy Now</a>`;

					var secondRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[8];
					secondRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/lt285-74r16">Buy Now</a>`;

					var contentWrapper = document.createElement("div"); contentWrapper.classList.add("contentWrapper", "showContent");
					contentWrapper.append(descriptionRow); contentWrapper.append(firstRow); contentWrapper.append(secondRow);
					element.append(sectionTitle); element.append(contentWrapper);
					break;
				case 1:
					var sectionTitle = document.createElement("div"); sectionTitle.classList.add("sectionTitle");
					sectionTitle.innerHTML = '<h1>17" WHEELS</h1><i class="fas fa-angle-down arrow"/>';
					var descriptionRow = document.createElement("div"); descriptionRow.classList.add("descriptionRow");
					descriptionRow.innerHTML = '<h6>TIRE SIZE</h6><h6>SERVICE<br/>DESCRIPTION</h6><h6>LOAD<br/>RANGE</h6><h6>SIDE<br/>WALL</h6><h6>APPROVED<br/>RIM WIDTH</h6><h6>MEASURED<br/>RIM WIDTH</h6><h6>SECTION<br/>WIDTH</h6><h6>OVERALL<br/>DIAMETER</h6><h6>TREAD<br/>WIDTH</h6><h6>TIRE<br/>WEIGHT</h6><h6>MAX<br/>LOAD</h6><h6>TREAD<br/>DEPTH</h6><h6>MAX TIRE<br/>PRESSURE</h6><h6>&nbsp;</h6>';

					var firstRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[1];
					firstRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/37x12-50r17lt">Buy Now</a>`;

					var secondRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[2];
					secondRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/lt315-70r17">Buy Now</a>`;

					var contentWrapper = document.createElement("div"); contentWrapper.classList.add("contentWrapper");
					contentWrapper.append(descriptionRow); contentWrapper.append(firstRow); contentWrapper.append(secondRow);
					element.append(sectionTitle); element.append(contentWrapper);
					break;
				case 2:
					var sectionTitle = document.createElement("div"); sectionTitle.classList.add("sectionTitle");
					sectionTitle.innerHTML = '<h1>18" WHEELS</h1><i class="fas fa-angle-down arrow"/>';

					var descriptionRow = document.createElement("div"); descriptionRow.classList.add("descriptionRow");
					descriptionRow.innerHTML = '<h6>TIRE SIZE</h6><h6>SERVICE<br/>DESCRIPTION</h6><h6>LOAD<br/>RANGE</h6><h6>SIDE<br/>WALL</h6><h6>APPROVED<br/>RIM WIDTH</h6><h6>MEASURED<br/>RIM WIDTH</h6><h6>SECTION<br/>WIDTH</h6><h6>OVERALL<br/>DIAMETER</h6><h6>TREAD<br/>WIDTH</h6><h6>TIRE<br/>WEIGHT</h6><h6>MAX<br/>LOAD</h6><h6>TREAD<br/>DEPTH</h6><h6>MAX TIRE<br/>PRESSURE</h6><h6>&nbsp;</h6>';

					var firstRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[3];
					firstRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/lt305-70r18">Buy Now</a>`;

					var secondRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[5];
					secondRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/lt275-70r18">Buy Now</a>`;

					var contentWrapper = document.createElement("div"); contentWrapper.classList.add("contentWrapper");
					contentWrapper.append(descriptionRow); contentWrapper.append(firstRow); contentWrapper.append(secondRow);
					element.append(sectionTitle); element.append(contentWrapper);
					break;
				case 3:
					var sectionTitle = document.createElement("div"); sectionTitle.classList.add("sectionTitle");
					sectionTitle.innerHTML = '<h1>20" WHEELS</h1><i class="fas fa-angle-down arrow"/>';

					var descriptionRow = document.createElement("div"); descriptionRow.classList.add("descriptionRow");
					descriptionRow.innerHTML = '<h6>TIRE SIZE</h6><h6>SERVICE<br/>DESCRIPTION</h6><h6>LOAD<br/>RANGE</h6><h6>SIDE<br/>WALL</h6><h6>APPROVED<br/>RIM WIDTH</h6><h6>MEASURED<br/>RIM WIDTH</h6><h6>SECTION<br/>WIDTH</h6><h6>OVERALL<br/>DIAMETER</h6><h6>TREAD<br/>WIDTH</h6><h6>TIRE<br/>WEIGHT</h6><h6>MAX<br/>LOAD</h6><h6>TREAD<br/>DEPTH</h6><h6>MAX TIRE<br/>PRESSURE</h6><h6>&nbsp;</h6>';

					var firstRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[4];
					firstRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/35x12-50r20lt">Buy Now</a>`;

					var secondRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[6];
					secondRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/lt305-55r20">Buy Now</a>`;

					var thirdRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[9];
					thirdRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/37x13-50r20lt-diesel-power-m-t">Buy Now</a>`;

					var contentWrapper = document.createElement("div"); contentWrapper.classList.add("contentWrapper");
					contentWrapper.append(descriptionRow); contentWrapper.append(firstRow); contentWrapper.append(secondRow); contentWrapper.append(thirdRow);
					element.append(sectionTitle); element.append(contentWrapper);
					break;
				case 4:
					var sectionTitle = document.createElement("div"); sectionTitle.classList.add("sectionTitle");
					sectionTitle.innerHTML = '<h1>22" WHEELS</h1><i class="fas fa-angle-down arrow"/>';

					var descriptionRow = document.createElement("div"); descriptionRow.classList.add("descriptionRow");
					descriptionRow.innerHTML = '<h6>TIRE SIZE</h6><h6>SERVICE<br/>DESCRIPTION</h6><h6>LOAD<br/>RANGE</h6><h6>SIDE<br/>WALL</h6><h6>APPROVED<br/>RIM WIDTH</h6><h6>MEASURED<br/>RIM WIDTH</h6><h6>SECTION<br/>WIDTH</h6><h6>OVERALL<br/>DIAMETER</h6><h6>TREAD<br/>WIDTH</h6><h6>TIRE<br/>WEIGHT</h6><h6>MAX<br/>LOAD</h6><h6>TREAD<br/>DEPTH</h6><h6>MAX TIRE<br/>PRESSURE</h6><h6>&nbsp;</h6>';

					var firstRow = document.createElement("div"); 
					var {tireSize, serviceDesc, loadRange, sideWall, appRimWidth, measRimWidth, sectionWidth, overallDiam, treadWidth, tireWeight, maxLoad, treadDepth, maxPSI} = accContent[10];
					firstRow.innerHTML = `<p>${tireSize}</p><p>${serviceDesc}</p><p>${loadRange}</p><p>${sideWall}</p><p>${appRimWidth}</p><p>${measRimWidth}</p><p>${sectionWidth}</p><p>${overallDiam}</p><p>${treadWidth}</p><p>${tireWeight}</p><p>${maxLoad}</p><p>${treadDepth}</p><p>${maxPSI}</p><a href="https://www.legiontires.com/products/37x13-50r22lt">Buy Now</a>`;

					element.append(sectionTitle); element.append(descriptionRow); element.append(firstRow);

					var contentWrapper = document.createElement("div"); contentWrapper.classList.add("contentWrapper");
					contentWrapper.append(descriptionRow); contentWrapper.append(firstRow); 
					element.append(sectionTitle); element.append(contentWrapper);
					break;
				default:
					console.log("error");
			}
		});

		looxReviews.parentNode.insertBefore(accordianWrapper, looxReviews);

		//ACCORDIAN DROP DOWN
		document.querySelectorAll('.sectionTitle').forEach((element, index, array) => {
			var accordianIndex = index;
			element.addEventListener("click", function(){
				element.parentNode.querySelectorAll('div')[1].classList.toggle("showContent");
				element.querySelector("i").classList.toggle("fa-angle-down");
				element.querySelector("i").classList.toggle("fa-angle-up");
				array.forEach((element, index, array) => {
					if (index === accordianIndex);
					else {
						element.classList.remove(".showContent");
						element.parentNode.querySelectorAll('div')[1].classList.remove("showContent");
						element.querySelector("i").classList.add("fa-angle-down");
						element.querySelector("i").classList.remove("fa-angle-up");
					}
				});
			});
		});


		$('<p id="shopOtherTires">SHOP OTHER TIRES</p>').insertBefore('.accordianWrapper')


		document.querySelectorAll('.accordianWrapper .tiresSection').forEach((el1, i1, arr1) => {
			el1.querySelectorAll('.contentWrapper > div').forEach((el, i, arr) => {
				if (i == 0) return;
				var seeDetailsBtn = document.createElement("a"); seeDetailsBtn.classList.add("see-details-btn");
				seeDetailsBtn.href = "#"; seeDetailsBtn.innerHTML = 'SEE DETAILS'
				el.insertBefore(seeDetailsBtn, el.querySelector('p:first-child').nextSibling);



				seeDetailsBtn.addEventListener("click", () => {
					event.preventDefault();
					//clones array so you don't change the actual list
					var arrayClone = [...arr];

					var descriptionClone = $(`<div class="descriptionRow">${arrayClone[0].innerHTML.replace(/<br\/>|<br>/g," ")}</div>`);
					var contentClone = $(`<div>${arrayClone[i].innerHTML}</div>`);


					descriptionClone.addClass('description__column');
					contentClone.addClass('description__column')


					//grabs tire size description
					var tireSize = document.createElement("div"); tireSize.classList.add("tireSize");
					tireSizeContent = arr[i].querySelectorAll('p')[0].innerHTML;
					console.log(tireSizeContent);
					tireSize.innerHTML = tireSizeContent;

					//Creates img wrapper and img
					var tireWrap = document.createElement("div"); tireWrap.classList.add("tireWrap");
					tireWrap.innerHTML = '<img src="https://disruptive-advertising.s3-us-west-2.amazonaws.com/Diesel+Power+Gear/MobilePDPTireSpecsChart/tire.png"/>';

					//creates close button X
					var closePopUp__X = document.createElement("div"); closePopUp__X.classList.add("close-popup__X");
					closePopUp__X.innerHTML = 'X';



					//creates popup and puts content in
					var popup = document.createElement("div"); popup.classList.add("popup");
					var popUpDescriptionCtn = document.createElement("div"); popUpDescriptionCtn.classList.add("popup__description-container");
					//					popUpDescriptionCtn.append(descriptionClone);
					//					popUpDescriptionCtn.append(contentClone);
					popUpDescriptionCtn.append(closePopUp__X);
					popup.prepend(tireWrap);
					popup.prepend(tireSize);
					popup.append(popUpDescriptionCtn);
					var popupBackground = document.createElement("div"); popupBackground.classList.add("popup-background");

					//appends popup and background to body
					document.querySelector('body').append(popup);
					document.querySelector('body').append(popupBackground);

					descriptionClone.appendTo('.popup__description-container');
					contentClone.appendTo('.popup__description-container');


					//creates CTA
					var buyNowCTA_PopUp = document.createElement("div"); buyNowCTA_PopUp.classList.add("buyNowCTA_PopUp");
					buyNowCTA_PopUp.innerHTML = 'BUY NOW';
					buyNowCTA_PopUp.addEventListener("click", () => {
						el.querySelector('a:last-child').click();
					});
					popup.append(buyNowCTA_PopUp);

					//Close PopUps
					closePopUp__X.addEventListener("click", () => {
						popup.remove();
						popupBackground.remove();
					});
					popupBackground.addEventListener("click", () => {
						popup.remove();
						popupBackground.remove();
					});

				});
			});
		});
	}
});




