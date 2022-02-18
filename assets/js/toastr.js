// Toast notification
let alert = document.getElementById("toastr");
function showAlert() {
  let newsletterInput = document.getElementById("newsletterInput");
  if (newsletterInput.value == "") {
    return;
  }
  newsletterInput.value = "";
  alert.className = "show";
  setTimeout(function () {
    hideAlert();
  }, 5000);
}

function hideAlert() {
  alert.className = alert.className.replace("show", "");
}
