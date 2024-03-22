const itemsPerPage = 5; // Number of items to display per page
const content = document.getElementById("content");
const pagination = document.getElementById("pagination");

// Sample data
const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

// Function to display items based on current page
function displayItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  content.innerHTML = ""; // Clear existing content

  paginatedData.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    content.appendChild(p);
  });
}

// Function to generate pagination links
function generatePaginationLinks() {
  const pageCount = Math.ceil(data.length / itemsPerPage);

  pagination.innerHTML = ""; 

  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = i;
    li.appendChild(a);
    pagination.appendChild(li);

    a.addEventListener("click", function(event) {
      event.preventDefault();
      const page = parseInt(this.textContent);
      displayItems(page);
      setActivePageLink(page);
    });
  }

  setActivePageLink(1); 
}

function setActivePageLink(page) {
  const links = pagination.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].parentNode.classList.remove("active");
    if (parseInt(links[i].textContent) === page) {
      links[i].parentNode.classList.add("active");
    }
  }
}

displayItems(1);
generatePaginationLinks(); 
