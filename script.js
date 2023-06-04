const searchInput = document.querySelector("input");
const searchForm = document.getElementById("searchForm");

searchInput.addEventListener("keyup", function () {
  document.getElementById("closeIcon").style.display = parseInt(
    searchInput.value.trim().length
  )
    ? "block"
    : "none";
});

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (searchInput.value) {
    var searchUrl =
      "https://www.google.com/search?q=" +
      encodeURIComponent(searchInput.value);
    window.location.href = searchUrl;
  }
  closeSearch();
});

function closeSearch() {
  searchInput.value = "";
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
