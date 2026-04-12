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
