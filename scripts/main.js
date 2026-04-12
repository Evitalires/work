const jobListing = document.getElementById("job-listing");

jobListing?.addEventListener("click", (event) => {
  const element = event.target;

  if (element.classList.contains("apply-job")) {
    const button = element;
    button.textContent = "Applied";
    button.classList.add("applied");
    button.disabled = true;
  }
});

const filterCountry = document.querySelector(".filter-country");
const countrySelected = document.querySelector(".country-selected");

filterCountry?.addEventListener("change", () => {
  const countrySelectedValue = filterCountry.value;
  if (countrySelected) {
    countrySelected.textContent = countrySelectedValue;
  }
});
