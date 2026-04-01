const container = document.getElementById("countries-container");
const loading = document.getElementById("loading");

const searchInput = document.getElementById("search");
const regionFilter = document.getElementById("regionFilter");
const sortSelect = document.getElementById("sort");

let allCountries = [];

// Fetch API
fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
  .then(res => res.json())
  .then(data => {
    loading.style.display = "none";
    allCountries = data;
    displayCountries(allCountries);
  });

// Display function
function displayCountries(countries) {
  container.innerHTML = "";

  countries.map(country => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${country.flags.png}">
      <h3>${country.name.common}</h3>
      <p>Capital: ${country.capital ? country.capital[0] : "N/A"}</p>
      <p>Population: ${country.population}</p>
      <p>Region: ${country.region}</p>
    `;

    container.appendChild(card);
  });
}

// Filter + Search + Sort
function updateUI() {
  let filtered = allCountries;

  // Search
  const searchValue = searchInput.value.toLowerCase();
  filtered = filtered.filter(c =>
    c.name.common.toLowerCase().includes(searchValue)
  );

  // Filter by region
  const region = regionFilter.value;
  if (region) {
    filtered = filtered.filter(c => c.region === region);
  }

  // Sort
  const sortType = sortSelect.value;
  if (sortType === "name") {
    filtered = filtered.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  } else if (sortType === "population") {
    filtered = filtered.sort((a, b) =>
      a.population - b.population
    );
  }

  displayCountries(filtered);
}

// Event listeners
searchInput.addEventListener("input", updateUI);
regionFilter.addEventListener("change", updateUI);
sortSelect.addEventListener("change", updateUI);