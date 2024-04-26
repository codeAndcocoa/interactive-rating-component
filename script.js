//Variables
const rateNumbers = document.querySelectorAll(".level");
const thankingModal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content .out-of");
const submitButton = document.getElementById("submit");

[...rateNumbers].forEach((num) => {
  num.addEventListener("click", (event) => {
    [...rateNumbers].forEach((rate) => rate.classList.remove("changeStyle"));
    event.target.classList.add("changeStyle");
  });
});
submitButton.addEventListener("click", () => {
  [...rateNumbers].forEach((num) => {
    if (num.classList.contains("changeStyle")) {
      const rate = document.createElement("span");
      rate.innerHTML = `You selected ${num.textContent} out of 5`;
      modalContent.appendChild(rate);
      thankingModal.style.display = "block";
    } else {
      return false;
    }
  });
});

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Select and submit a number rating
// - See the "Thank you" card state after submitting a rating
