document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    alert("Selected option: " + selectedOption.value);
  } else {
    alert("Please select an option!");
  }
});
