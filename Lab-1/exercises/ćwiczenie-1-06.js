/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######
 */
let rectWidth = 7
let rectHeight = 5
let rectBorderSymbol = "#"
let rectString = ""
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/

if (
    rectWidth >= 0 &&
    rectWidth <= 80 &&
    rectHeight >= 0 &&
    rectHeight <= 80 &&
    rectBorderSymbol.length === 1 &&
    !/\s/.test(rectBorderSymbol)
) {
    for (let i = 0; i < rectHeight; i++) {
        if (i === 0 || i === rectHeight - 1) {
            rectString += rectBorderSymbol.repeat(rectWidth)
        } else {
            rectString += rectBorderSymbol
            rectString += " ".repeat(rectWidth - 2)
            rectString += rectBorderSymbol
        }
        rectString += "\n"
    }
} else {
    rectString = "Błędne dane wejściowe"
}

console.log(rectString)
