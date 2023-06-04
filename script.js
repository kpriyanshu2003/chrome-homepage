const src = document.querySelector("input");

src.addEventListener("keyup", () => {
  document.getElementById("closeIcon").style.display = parseInt(
    src.value.trim().length
  )
    ? "block"
    : "none";
});

function search(event) {
  event.preventDefault();
  if (src.value) {
    var searchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(src.value);
    window.location.assign(searchUrl);
  }
  closeSearch();
}

function closeSearch() {
  src.value = "";
}

function dnt() {
  let dt = new Date();
  let dd = dt.getDate().toString().padStart(2, "0");
  let mm = (dt.getMonth() + 1).toString().padStart(2, "0");
  let yy = dt.getFullYear();
  let h = dt.getHours().toString().padStart(2, "0");
  let m = dt.getMinutes().toString().padStart(2, "0");
  let s = dt.getSeconds().toString().padStart(2, "0");

  document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
  document.getElementById("date").innerHTML = `${dd}/${mm}/${yy}`;
  const greet = document.getElementById("greet");
  if (h >= 0 && h < 12) greet.innerHTML = "Good Morning";
  else if (h >= 12 && h < 17) greet.innerHTML = "Good Afternoon";
  else greet.innerHTML = "Good Evening";
}

setInterval(dnt, 1000);
