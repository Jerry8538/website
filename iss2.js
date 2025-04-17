console.log(new Date().toString() + " : view : " + "page")

document.addEventListener("click", clicks)

function clicks(event) {
	let tag = event.target.tagName.toLowerCase()
	let object = "other"
	if (["p", "h1", "h2", "h3", "ul", "li"].includes(tag)) {
		object = "text"
	} else if (tag === "textarea") {
		object = "textbox"
	} else if (tag === "header") {
		object = "header"
	} else if (tag === "a") {
		object = "link"
	} else if (tag === "img") {
		object = "image"
	} else if (tag === "nav") {
		object = "navbar"
	}
	console.log(new Date().toString() + " : click : " + object)
}
