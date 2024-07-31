import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[];
  
  constructor(private bookService: BookServiceService) {
    this.books = bookService.getBooks();
  }

  executeAction = (book: Book, index: number) => {
    this.bookService.executeAction(book,index);
  };

  edit = (book: Book) => {
    this.bookService.edit(book.id);
  }

  delete = (book: Book) => {
    this.bookService.delete(book.id);
  }
 
}
