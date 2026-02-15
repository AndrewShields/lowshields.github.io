// Get all
function getUserLangCode() {
	const langTag = navigator.language;
	if (!langTag) {
		return null;
	}

	const langCode = langTag.split("-")[0];
	return langCode;
}

const userLangCode = getUserLangCode();
const links = document.querySelectorAll(".major-button");

links.forEach(link => {
	const href = link.getAttribute("href");
	const langCode = href.split("/")[0];

	if (langCode === userLangCode) {
		link.style.border = "1px solid #0AF";
	}
});
