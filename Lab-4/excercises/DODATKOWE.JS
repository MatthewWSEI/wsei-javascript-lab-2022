function fun(arr) {
    const authorsMap = {};
  
    arr.forEach(book => {
      book.authors.forEach(author => {
        if (!authorsMap[author]) {
          authorsMap[author] = {
            author: author,
            books: [],
            price: 0,
          };
        }
  
        authorsMap[author].books.push(book.title);
        authorsMap[author].price += book.price;
      });
    });
  
    // Konwersja mapy na posortowaną tablicę wynikową
    const result = Object.values(authorsMap).sort((a, b) => a.author.localeCompare(b.author));
  
    return result;
  }

const c1 = Math.random() * 100;
const c2 = Math.random() * 100;
const c3 = Math.random() * 100;
let arr = [
  { title: "ABC", price: c1, authors: ["adam", "ewa", "żaneta"] },
  { title: "CBA", price: c2, authors: ["adam"] },
  { title: "OND", price: c3, authors: ["ewa", "karol"] },
];
let r = fun(arr);
console.log(r.length);
console.log(r[0].author);
console.log(r[1].author)
console.log(r[2].author);
console.log(r[3].author);

console.log("////////////////////////////////////////////////////")


console.log(r[0].price === c1 + c2);
console.log(r[1].price === c1 + c3);
console.log(r[2].price === c3);
console.log(r[3].price === c1);


console.log(r[0].price)

console.log("////////////////////////////////////////////////////")

console.log(r[0].books.includes("CBA") && r[0].books.includes("ABC"));
console.log(r[1].books.includes("ABC") && r[1].books.includes("OND"));
console.log(r[2].books.includes("OND"));
console.log(r[3].books.includes("ABC"));

