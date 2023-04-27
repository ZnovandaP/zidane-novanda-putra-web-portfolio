const syncCurrentYearFeature = () => {
  /* Get Current Year For Footer */
const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const yearFooter = document.querySelector(".year");
yearFooter.innerText = getCurrentYear();
}

export default syncCurrentYearFeature;