var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css";
fontAwesome5.rel = "stylesheet";
fontAwesome5.href = "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);


function stickyButtons() {

  if (document.querySelectorAll(".customer-not-logged-in").length == 0) {
    return;
  }

  var stickyBtnsContainer = document.createElement("div");
  stickyBtnsContainer.setAttribute("class", "stickyBtnsContainer");

  var signInBtnContainer = document.createElement("div");
  signInBtnContainer.setAttribute("class", "signInBtnContainer");
  var signInBtn = document.createElement("a");
  signInBtn.href = "https://www.mmasilver.com/account/login";
  signInBtn.setAttribute("class", "signInBtn");
  var signInBtnText = document.createElement("h5");
  signInBtnText.setAttribute("class", "signInBtnText");
  signInBtnText.innerHTML = "SIGN IN TO </br> SEE PRICES";
  var signInIcon = document.createElement("i");
  signInIcon.setAttribute("class", "far fa-gem iconClass");
  signInBtn.append(signInIcon);
  signInBtn.append(signInBtnText);
  signInBtnContainer.append(signInBtn);

  var signUpBtnContainer = document.createElement("div");
  signUpBtnContainer.setAttribute("class", "signUpBtnContainer");
  var signUpBtn = document.createElement("a");
  signUpBtn.href = "https://www.mmasilver.com/account/register";
  signUpBtn.setAttribute("class", "signUpBtn");
  var signUpBtnText = document.createElement("h5");
  signUpBtnText.setAttribute("class", "signUpBtnText");
  signUpBtnText.innerHTML = "CREATE AN </br> ACCOUNT";
  var signUpIcon = document.createElement("i");
  signUpIcon.setAttribute("class", "fas fa-user-plus  iconClass");
  signUpBtn.append(signUpIcon);
  signUpBtn.append(signUpBtnText);
  signUpBtnContainer.append(signUpBtn);

  stickyBtnsContainer.append(signInBtnContainer);
  stickyBtnsContainer.append(signUpBtnContainer);

  document.body.append(stickyBtnsContainer);


}

if (document.readyState != 'loading') stickyButtons();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", stickyButtons);
else document.attachEvent("onreadystatechange", () => {
  if (document.readyState == 'complete') {
    stickyButtons();
  }
})





