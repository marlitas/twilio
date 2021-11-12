function sortLetters(string1, string2) {
    if (string1.toUpperCase() === string2.toUpperCase()){
        console.log("0")
    } else {
        console.log(string1.localeCompare(string2));
    }
}

sortLetters(process.argv[2], process.argv[3])