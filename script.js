document.addEventListener("DOMContentLoaded", function () {
  const assistant = document.getElementById("assistant");
  const buttons = document.querySelectorAll("button");
  const explanationDiv = document.querySelector(".explanation");
  const explanationText = document.getElementById("explanationText");
  const elementsToExplain = document.querySelectorAll(
    ".button, pic, #register"
  );

  setTimeout(function () {
    assistant.classList.add("show");
  }, 1000); // Delay appearance for 1 second (1000 milliseconds)

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get button position
      const buttonRect = button.getBoundingClientRect();
      const buttonX = buttonRect.left + window.scrollX;
      const buttonY = buttonRect.top + window.scrollY;

      // Move assistant to the button
      assistant.style.transform = `translate(${buttonX}px, ${buttonY}px)`;

      // Show explanation
      explanationText.textContent = `Button ${button.id} was clicked. It does XYZ.`;
      explanationDiv.style.display = "block";
    });
  });

  explanationText.addEventListener("click", function () {
    // Hide explanation and return assistant to original position
    explanationDiv.style.display = "none";
    assistant.style.transform = `translate(10px, 10px)`;
  });

  elementsToExplain.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      // Get element position
      const elementRect = element.getBoundingClientRect();
      const elementX = elementRect.left + window.scrollX;
      const elementY = elementRect.top + window.scrollY;

      // Move assistant to the element
      assistant.style.transform = `translate(${elementX}px, ${elementY}px)`;

      // Explain the element
      explainElement(element);
    });

    element.addEventListener("mouseleave", function () {
      // Move assistant back to its original position
      assistant.style.transform = `translate(10px, 10px)`;
    });
  });

  function explainElement(element) {
    // You can customize the explanation logic based on the element type or ID
    let explanation;
    if (element.id === "register") {
      explanation = "register.";
    } else if (element.classList.contains("button")) {
      explanation = `This is Button ${element.id}.`;
    } else if (element.classList.contains("pic")) {
      explanation = "This is a custom div element.";
    } else {
      explanation = "This is an unknown element.";
    }

    // Display the explanation in the console
    console.log(`Assistant: ${explanation}`);
  }
});
