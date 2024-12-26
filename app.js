document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myCartDropdownButton1").click();
});

function toggleCompanyInfo() {
  const companyAddressRadio = document.getElementById("company-address");
  const companyInfoContainer = document.getElementById(
    "company-info-container"
  );

  if(companyInfoContainer){
    companyInfoContainer.classList.toggle("hidden", !companyAddressRadio.checked);
  }
}

toggleCompanyInfo();
document.querySelectorAll('[name="address-type"]').forEach((radio) => {
  radio.addEventListener("change", toggleCompanyInfo);
});
