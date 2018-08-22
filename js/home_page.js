/* when scrolled down to description part of site, navbar will show and stay */
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) || (document.screen.width < 650)) {
      document.getElementById("navigation").style.top = "0px"; /* sets the style.top to 0, if scrolled to 100 px OR the screen is less than 650px */
  } else {
      document.getElementById("navigation").style.top = "-150px"; /* sets the style.top to -200px (hides it), if above 1250 px */
  }
}

$("[data-toggle='popover']").popover();
