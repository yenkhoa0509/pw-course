class Library {
    name: string;
    location: string;
    books: { title: string; author: string }[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(book: { title: string; author: string }) {
        this.books.push(book);
    }

    findBook(title: string) {
        return this.books.find((book) => book.title === title);
    }
}
