function addItem() {
  var input = document.getElementById('itemInput');
  var itemText = input.value.trim();

  if (itemText !== '') {
    var list = document.getElementById('list');
    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
    input.value = '';
  }
}
