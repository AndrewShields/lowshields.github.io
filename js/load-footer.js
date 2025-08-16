// Create footer
const footer = document.createElement("div");
footer.id = "footer";
document.body.appendChild(footer);

// Populate footer
fetch("/snippets/footer.html")
	.then(res => res.text())
	.then(html => {
		footer.innerHTML = html;
	}
);
