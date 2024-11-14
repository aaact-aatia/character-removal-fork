// Function to set the theme based on system color scheme
function setBootstrapTheme() {
	const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
}

// Run on initial load
setBootstrapTheme();

// Listen for changes in system color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setBootstrapTheme);
