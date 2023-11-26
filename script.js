document.addEventListener("DOMContentLoaded", function() {
  const buttonContainer = document.getElementById("buttonContainer");
  const generateButton = document.getElementById("generateButtons");

  function showMessage(isWinner) {
    if (isWinner) {
      alert("Congratulations, you've won!");
    } else {
      alert("Sorry, you didn't win.");
    }
  }

  function setWinner(button) {
    button.setAttribute("data-winner", "true");
  }

  function clearWinner() {
    const winnerButton = buttonContainer.querySelector("button[data-winner='true']");
    if (winnerButton) {
      winnerButton.removeAttribute("data-winner");
    }
  }

  function assignWinner(buttons) {
    clearWinner();
    const winningButtonIndex = Math.floor(Math.random() * buttons.length);
    setWinner(buttons[winningButtonIndex]);
  }

  buttonContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      showMessage(event.target.getAttribute("data-winner") === "true");
    }
  });

  generateButton.addEventListener("click", function() {
    const buttonCount = parseInt(document.getElementById("buttonCount").value, 10);
    if (!isNaN(buttonCount) && buttonCount > 0) {
      buttonContainer.innerHTML = "";
      for (let i = 0; i < buttonCount; i++) {
        const newButton = document.createElement("button");
        newButton.textContent = `Button ${i + 1}`;
        buttonContainer.appendChild(newButton);
      }
      const buttons = Array.from(buttonContainer.querySelectorAll("button"));
      assignWinner(buttons);
    } else {
      alert("Please enter a valid number to generate buttons!");
    }
  });

  const buttons = Array.from(buttonContainer.querySelectorAll("button"));
  assignWinner(buttons);
});
