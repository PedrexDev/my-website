var search = document.getElementById("searchBar");
var els = document.querySelectorAll(".el");

search.addEventListener("keyup", function() {

  Array.prototype.forEach.call(els, function(el) {
    if (el.textContent.trim().indexOf(search.value) > -1)
      el.style.display = 'block';
    else el.style.display = 'none';
  });

});