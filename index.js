// Zarovka
// Vytvořte si repozitář ze šablony cviceni-zarovka se stránkou, která zobrazuje obyčejnou žárovku.

// 1. Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce přidala k elementu žárovky CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
// 2. Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. Opakovaným mačkáním kláves ji tak můžeme rozsvěcovat a zhasínat.


console.log('funguju!');

const bulb = document.querySelector('.bulb')
console.log(bulb)


// Připojení naslouchání kláves k celému dokumentu místo k elementu bulb
document.addEventListener('keydown', () => {
    // bulb.classList.add("bulb--on");
    bulb.classList.toggle("bulb--on");
});
