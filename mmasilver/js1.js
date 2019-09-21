

function stickyButtons() {

  if (document.querySelectorAll(".customer-not-logged-in").length == 0) {
    return;
  }

  var stickyBtnsContainer = document.createElement("div");
  stickyBtnsContainer.setAttribute("class", "stickyBtnsContainer");

  var signInBtnContainer = document.createElement("div");
  signInBtnContainer.setAttribute("class", "signInBtnContainer");
  var signInBtn = document.createElement("a");
  signInBtn.innerHTML = "SIGN IN TO SEE PRICES";
  signInBtn.href = "https://www.mmasilver.com/account/login";
  signInBtn.setAttribute("class", "signInBtn");
  signInBtnContainer.append(signInBtn);

  var signUpBtnContainer = document.createElement("div");
  signUpBtnContainer.setAttribute("class", "signUpBtnContainer");
  var signUpBtn = document.createElement("a");
  signUpBtn.href = "https://www.mmasilver.com/account/register";
  signUpBtn.innerHTML = "CREATE AN ACCOUNT";
  signUpBtn.setAttribute("class", "signUpBtn");
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




