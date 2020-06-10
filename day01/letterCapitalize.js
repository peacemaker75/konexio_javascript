function letterCapitalize(sentence) {
    sentence = sentence.split(" ");

    for (var i = 0, x = sentence.length; i < x; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substr(1);
    }

    return sentence.join(" ");
}

console.log(letterCapitalize("Vélo 1 de 2 faire 3"));