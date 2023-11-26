const dictionary = new Set();

function saveWord() {
  const wordInput = document.getElementById("wordInput").value.trim();
  if (wordInput !== "") {
    dictionary.add(wordInput.toLowerCase());
    document.getElementById("wordInput").value = "";
    document.getElementById("message").textContent = `Word "${wordInput}" saved to dictionary.`;
  }
}

function searchWord() {
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  if (searchInput !== "") {
    const message = document.getElementById("message");
    if (dictionary.has(searchInput)) {
      message.textContent = `The word "${searchInput}" is in the dictionary.`;
    } else {
      message.textContent = `The word "${searchInput}" is not in the dictionary.`;
    }
    document.getElementById("searchInput").value = "";
  }
}
