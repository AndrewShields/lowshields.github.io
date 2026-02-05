// Load google translate widget
// https://developers.google.com/workspace/admin/directory/v1/languages
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: "en",
		includedLanguages: "ar,cs,da,de,en, en-GB,es,fi,fr,iw,hi,hu,id,it,ja,ko,no,nl,pl,pt-PT,pt-BR,ro,ru,sk,sv,th,tr,uk,vi,zh-CN,zh-TW",
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
		autoDisplay: false
	}, "google-translate");
}

(function loadGoogleTranslate() {
	const script = document.createElement("script");
	script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
	script.async = true;
	document.head.appendChild(script);
})();
