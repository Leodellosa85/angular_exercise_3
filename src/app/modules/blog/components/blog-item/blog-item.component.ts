import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input('blogInput') blog: Blog | undefined;
  @Output() editActionEmitter = new EventEmitter<Blog>();
  @Output() deleteActionEmitter = new EventEmitter<Blog>();

  sendEditAction = () => {
    console.log('Edit action from child');
    this.editActionEmitter.emit(this.blog);
  };

  sendDeleteAction = () => {
    console.log('Delete action from child');
    this.deleteActionEmitter.emit(this.blog);
  };
}
