function search() {
  if (document.querySelector("input").value) {
    var searchUrl =
      "https://www.google.com/search?q=" +
      encodeURIComponent(document.querySelector("input").value);
    window.location.href = searchUrl;
  }
}

function time() {
  let dt = new Date();
  let m = dt.getSeconds();
  console.log(m);
}

// setInterval(time, 1000);
