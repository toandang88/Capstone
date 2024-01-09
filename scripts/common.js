export function loadTXTContent(path, element) {
  if (path != null) {
    // Fetch the text file
    fetch(path)
      .then(response => response.text())
      .then(textContent => {
        // Set the text content of the span element
        element.innerHTML = textContent;
      })
      .catch(error => {
        console.error("Error loading text file:", error);
      });
  }
}
