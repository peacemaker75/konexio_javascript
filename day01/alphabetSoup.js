function alphabetSoup(str) {
    var letr = str.split('');
    return letr.sort().join();
}console.log(alphabetSoup('konexio'));