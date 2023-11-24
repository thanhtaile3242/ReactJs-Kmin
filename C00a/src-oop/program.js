import { question } from "readline-sync";
import { Book } from "./book.js";
import { booksData } from "../data/data.js";

export class Program {
     
    constructor() {
        this.books = [];
        this.loadData(booksData);
    }

    loadData(data) {
        for (let e of data) {
            const newBook = new Book(e);
            this.books.push(newBook);
        }
    }

    menu() {
        console.log("========== Menu ==========");
        console.log("1. Count number of books by publisher.");
        console.log("2. Get average price of books.");
        console.log("3. Find book with highest id.");
        console.log("4. Check if book information is valid.");
        console.log("5. Filter books by price range.");
        console.log("6. Search books by keyword.");
        console.log("========== Choose ============");
    }

    run() {
        console.log(this.books);
    }

    feature1() {
       
    }
    featrue2() {
        
    }
}
