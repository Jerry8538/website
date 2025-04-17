let textbox = document.getElementById("textbox")
textbox.addEventListener("input", analyzeText)

function analyzeText() {
	let text = document.getElementById("textbox").value
	let letters = (text.match(/[a-zA-Z]/g) || "").length
	let words = (text.match(/\w+/g) || "").length
	let spaces = (text.match(/\s/g) || "").length
	let newlines = (text.match(/\n/g) || "").length
	let symbols = (text.match(/[^a-zA-Z0-9\s\n]/g) || "").length

	document.getElementById("letters").textContent = letters
	document.getElementById("words").textContent = words
	document.getElementById("spaces").textContent = spaces
	document.getElementById("newlines").textContent = newlines
	document.getElementById("symbols").textContent = symbols

	let pronouns = {"all":0, "another":0, "any":0, "anybody":0, "anyone":0, "anything":0, "as":0, "aught":0, "both":0, "each":0, "either":0, "enough":0, "everybody":0, "everyone":0, "everything":0, "few":0, "he":0, "her":0, "hers":0, "herself":0, "him":0, "himself":0, "his":0, "I":0, "idem":0, "it":0, "its":0, "itself":0, "many":0, "me":0, "mine":0, "most":0, "my":0, "myself":0, "naught":0, "neither":0, "nobody":0, "none":0, "nothing":0, "nought":0, "one":0, "other":0, "others":0, "ought":0, "our":0, "ours":0, "ourself":0, "ourselves":0, "several":0, "she":0, "some":0, "somebody":0, "someone":0, "something":0, "somewhat":0, "such":0, "suchlike":0, "that":0, "thee":0, "their":0, "theirs":0, "theirself":0, "theirselves":0, "them":0, "themself":0, "themselves":0, "there":0, "these":0, "they":0, "thine":0, "this":0, "those":0, "thou":0, "thy":0, "thyself":0, "us":0, "we":0, "what":0, "whatever":0, "whatnot":0, "whatsoever":0, "whence":0, "where":0, "whereby":0, "wherefrom":0, "wherein":0, "whereinto":0, "whereof":0, "whereon":0, "wherever":0, "wheresoever":0, "whereto":0, "whereunto":0, "wherewith":0, "wherewithal":0, "whether":0, "which":0, "whichever":0, "whichsoever":0, "who":0, "whoever":0, "whom ":0, "whomever":0, "whomso":0, "whomsoever":0, "whose":0, "whosever":0, "whosesoever":0, "whoso":0, "whosoever":0, "ye":0, "yon":0, "yonder":0, "you":0, "your":0, "yours":0, "yourself":0, "yourselves":0}

	let prepositions = {"aboard":0, "about":0, "above":0, "across":0, "after":0, "against":0, "along":0, "amid":0, "among":0, "around":0, "as":0, "at":0, "before":0, "behind":0, "below":0, "beneath":0, "beside":0, "between":0, "beyond":0, "but":0, "by":0, "concerning":0, "considering":0, "despite":0, "down":0, "during":0, "except":0, "following":0, "for":0, "from":0, "in":0, "inside":0, "into":0, "like":0, "minus":0, "near":0, "next":0, "of":0, "off":0, "on":0, "onto":0, "opposite":0, "out":0, "outside":0, "over":0, "past":0, "per":0, "plus":0, "regarding":0, "round":0, "save":0, "since":0, "than":0, "through":0, "till":0, "to":0, "toward":0, "under":0, "underneath":0, "unlike":0, "until":0, "up":0, "upon":0, "versus":0, "via":0, "with":0, "within":0, "without":0}

	let indefArticles = {"a":0, "an":0}

	let tokens = text.match(/\w+/g) || []

	tokens.forEach(token => {
		let word = token.toLowerCase() // check if either lower or upper exists
		if (Object.keys(prepositions).includes(token)) {
			prepositions[token] += 1
		} else if (Object.keys(prepositions).includes(word)) {
			prepositions[word] += 1
		}
		if (Object.keys(pronouns).includes(token)) {
			pronouns[token] += 1
		} else if (Object.keys(pronouns).includes(word)) {
			pronouns[word] += 1
		}
		if (Object.keys(indefArticles).includes(token)) {
			indefArticles[token] += 1
		} else if (Object.keys(indefArticles).includes(word)) {
			indefArticles[word] += 1
		}	
	})

	let pronounlist = "pronouns<br>"
	let prepositionlist = "prepositions<br>"
	let articlelist = "articles<br>"

	Object.keys(pronouns).forEach(word => {
		if (pronouns[word]) {
			pronounlist += (word+": "+pronouns[word]+"<br>")
		}
	})
	Object.keys(prepositions).forEach(word => {
		if (prepositions[word]) {
			prepositionlist += (word+": "+prepositions[word]+"<br>")
		}
	})
	Object.keys(indefArticles).forEach(word => {
		if (indefArticles[word]) {
			articlelist += (word+": "+indefArticles[word]+"<br>")
		}
	})
	document.getElementById("pronouns").innerHTML = pronounlist
	document.getElementById("prepositions").innerHTML = prepositionlist
	document.getElementById("articles").innerHTML = articlelist
}
