import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input('bookInput') book: Book | undefined;

  // @Output() actionEmitter = new EventEmitter<Book>();

  @Output() editActionEmitter = new EventEmitter<Book>();
  @Output() deleteActionEmitter = new EventEmitter<Book>();

  // sendAction = () => {
  //   console.log('Action from child');
  //   this.actionEmitter.emit(this.book);
  // };

  sendEditAction = () => {
    console.log('Edit action from child');
    this.editActionEmitter.emit(this.book);
  };

  sendDeleteAction = () => {
    console.log('Delete action from child');
    this.deleteActionEmitter.emit(this.book);
  };
}
