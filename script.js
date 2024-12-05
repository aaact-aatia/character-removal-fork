document.addEventListener("DOMContentLoaded", function () {
	const convertButton = document.getElementById("convertButton");
	const copyButton = document.getElementById("copyButton");
	const inputText = document.getElementById("inputText");
	const outputText = document.getElementById("outputText");

	// Function to convert text
	function convertText() {
		let text = inputText.value;

		// Remove all '|' and '│' characters
		text = text.replace(/\|/g, "");  // Remove '|'
		text = text.replace(/│/g, "");   // Remove '│'

		// Remove special/invisible characters but preserve line breaks
		text = text.replace(/[\u00A0\u200B\u202F]/g, ""); // Remove non-breaking space, zero-width space, and narrow no-break space
		text = text.replace(/[^\x20-\x7E\r\n]/g, "");  // Remove all non-ASCII characters except line breaks

		// Reformat Date: and Sent: lines to YYYY/MM/DD
		text = text.replace(/(?:Date|Sent):\s*(?:\w+,)?\s*(\w+)\s*(\d{1,2}),\s*(\d{4})(?:\s*at\s*\d{1,2}:\d{2}\s*[APM]*)?/g, function (match, month, day, year) {
			// Convert month to numerical format
			const months = {
				January: "01", February: "02", March: "03", April: "04",
				May: "05", June: "06", July: "07", August: "08",
				September: "09", October: "10", November: "11", December: "12"
			};
			const monthNumber = months[month];
			const dayPadded = day.padStart(2, '0'); // Pad day with leading zero if needed

			// Return the reformatted Date or Sent line
			return `${match.split(":")[0]}: ${year}/${monthNumber}/${dayPadded}`; // Keep the prefix (Date or Sent)
		});

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
