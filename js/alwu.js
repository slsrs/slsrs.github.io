window.onload = function() {
setTimeout("dopopup()", 500);
}
function dopopup() {
  document.getElementById("cf_alert_div").innerHTML = "<div style='padding-left:20px;padding-right:20px;'><br><b>We've got problems!</b> <br> Due to some network error, SLSRS site was not able to load. We've got a cached copy of it. <br><br></div>";
}
