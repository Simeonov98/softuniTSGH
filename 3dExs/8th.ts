class Book{
    constructor(readonly title: string,readonly author: string){}
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
// book.title = "Brave New World"; 
// book.author = "Terry Pratchet";