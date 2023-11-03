/**
 * Korzystając z funkcji Array (filter, map) i funkcji strzałkowych zdefiniuj funkcję, która
 * na podstawie łańcucha tworzy tablicę obiektów.
 * Jeden wiersz opisuje jeden obiekt.
 * Każdy obiekt powinien przejść walidację aby
 * - pole `name` nie było null, puste, nie miało więcej niż 25 znaków
 * - pole `ects` było całkowice, nieujmne i nie większe od 200
 * - pole `active` miało wartość true lub false (w łańcuchu true to `aktywny/aktywna` a false `nieaktywny\nieaktywna`).
 * Przykład obiektu: {name: "Robert", ects: 44, active: true}
 * Wiersze z błędnymi danymi należy pominąć (niepoprawna liczba kolumn w wierszu, niepoprawny typ, nieznana dana, niezgodność z walidacją)\
 * i nie tworzyć z nich obiektów.
 * Postaraj się robić walidację w osobnych wywołaniach `filter`.
 */

function parseStudents(input) {
    if (!input) {
        return []
    }

    const lines = input.split("\n")
    const students = lines
        .map((line) => line.split("\t"))
        .filter((line) => line.length === 3)
        .map((line) => {
            const name = line[0]
            const ects = parseInt(line[1])
            const active = line[2].includes("aktywny")
            if (
                name !== null &&
                name.trim() !== "" &&
                name.length <= 25 &&
                !isNaN(ects) &&
                ects >= 0 &&
                ects <= 200 &&
                typeof active === "boolean"
            ) {
                return { name, ects, active }
            }
            return null
        })
        .filter((student) => student !== null)

    return students
}

const studentLines =
    "Adam\t123\taktywny\nEwa\t34\tnieaktywna\nRoman\t56\taktywny\nKazik\t-34\taktyw\nBogdan\tfalse"

const students = parseStudents(studentLines)

try {
    if (students.length == 3) {
        console.log("Test 41 passed")
    } else {
        console.log("Test 41 failed")
    }
} catch (e) {
    console.log("Test 41 failed")
}

try {
    if (
        students[0].name === "Adam" &&
        students[0].ects === 123 &&
        students[0].active === true &&
        students[1].name === "Ewa" &&
        students[1].ects === 34 &&
        students[1].active === false
    ) {
        console.log("Test 42 passed")
    } else {
        console.log("Test 42 failed")
    }
} catch (e) {
    console.log("Test 42 failed")
}

try {
    if (parseStudents().length === 0) {
        console.log("Test 43 passed")
    } else {
        console.log("Test 43 failed")
    }
} catch (e) {
    console.log("Test 43 failed")
}
