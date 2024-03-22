document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var selectedOption = document.getElementById("dropdown").value;
  alert("Selected option: " + selectedOption);
});
