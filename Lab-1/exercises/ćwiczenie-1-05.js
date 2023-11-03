/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`.
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 36.6
let m = 50
let progressBar = ""
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/

if (n >= 0 && n <= m) {
    const progress = (n / m) * 100
    const progressBarLength = 50
    const progressBarFillLength = Math.floor(
        (progress / 100) * progressBarLength
    )

    progressBar += "|"
    progressBar += "#".repeat(progressBarFillLength)
    progressBar += " ".repeat(progressBarLength - progressBarFillLength)
    progressBar += "|"

    progressBar += "\n"
    progressBar += "0%".padEnd(progressBarFillLength + 1)
    progressBar += `${Math.round(progress)}%`.padEnd(
        progressBarLength - progressBarFillLength
    )
    progressBar += "100%"
} else {
    progressBar = "Błędne dane wejściowe"
}

console.log(progressBar)
