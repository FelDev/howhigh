console.log('@hello from index.js',);

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("splashScreen").style.opacity = "0";
  // window.scroll(0, document.documentElement.scrollHeight)
  // console.log('@document.documentElement.scrollHeight: ', document.documentElement.scrollHeight);
  document.getElementById("meter").scrollIntoView();
});