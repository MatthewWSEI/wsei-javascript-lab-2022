/**
 * Napisz skrypt, który generuje losowy łańcuch o długości w zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString
 */

let length = 5
let randomString = ""
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/

const characters = "abcdefghijklmnopqrstuvwxyz0123456789"

for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
}

console.log(randomString)
