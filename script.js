document.addEventListener("DOMContentLoaded", function () {
	const convertButton = document.getElementById("convertButton");
	const copyButton = document.getElementById("copyButton");
	const inputText = document.getElementById("inputText");
	const outputText = document.getElementById("outputText");

	// Function to convert text by removing specific characters
	function convertText() {
		let text = inputText.value;

		// Remove all '|' characters
		text = text.replace(/\|/g, ""); // Global match for '|'

		// Display the converted text
		outputText.textContent = text;
	}

	// Function to copy text to clipboard
	function copyToClipboard() {
		const text = outputText.textContent;

		if (text) {
			navigator.clipboard.writeText(text)
				.then(() => {
					alert("Text copied to clipboard!");
				})
				.catch(err => {
					console.error("Error copying text: ", err);
				});
		} else {
			alert("No text available to copy.");
		}
	}

	// Event listeners for buttons
	convertButton.addEventListener("click", convertText);
	copyButton.addEventListener("click", copyToClipboard);
});
