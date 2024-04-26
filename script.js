//Variables
const rateNumbers = document.querySelectorAll(".level");
const thankingModal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content .out-of");
const submitButton = document.getElementById("submit");


/** For each rate of rateNumbers,when user clicks a rate; a loop through rateNumbers array occured
  using forEach method to check if any rate has "changeStyle" class 
  and remove it then add the same class to the clicked rate to change its style ***/

[...rateNumbers].forEach((num) => {
  num.addEventListener("click", (event) => {
    [...rateNumbers].forEach((rate) => rate.classList.remove("changeStyle"));
    event.target.classList.add("changeStyle");
  });
});

/* When Submit button is clicked , another forEach loop through rateNumbers occurs to check if 
the rate contains "changeStyle" class ,if so then a span Element is created and a content added to
it containing the rate number. Then the span element appended to its parent and finally the modal itself
is displayed */
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


