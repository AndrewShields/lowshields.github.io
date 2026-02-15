// Get lang code e.g. "en-US" -> "en"
function getUserLangCode() {
	const langTag = navigator.language;
	if (!langTag) {
		return null;
	}

	const langCode = langTag.split("-")[0];
	return langCode;
}

// Get all lang codes in grid and add a border to the one that matches the user's lang
const userLangCode = getUserLangCode();
const links = document.querySelectorAll(".major-button");

links.forEach(link => {
	const href = link.getAttribute("href");
	const langCode = href.split("/")[0];

	if (langCode === userLangCode) {
		link.style.border = "1px solid #0AF";
	}
});
