// Create nav
const nav = document.createElement("div");
nav.id = "nav";
const header = document.querySelector("header");
header.appendChild(nav);

// Have a placeholder to keep structure while we load the snippet (to avoid a flicker)
const navBarPlaceholder = document.getElementById("nav-bar-placeholder");

// Populate nav
fetch("/snippets/nav.html")
	.then(res => res.text())
	.then(html => {
		navBarPlaceholder.remove();
		nav.innerHTML = html;
	}
);
