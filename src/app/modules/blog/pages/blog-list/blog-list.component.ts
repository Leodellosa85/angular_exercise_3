import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
    blogs: Blog[];

    constructor(private blogService: BlogServiceService) {
      this.blogs = blogService.getBlogs();
    }
  
    edit = (blog: Blog) => {
      this.blogService.edit(blog.id);
    }
  
    delete = (blog: Blog) => {
      this.blogService.delete(blog.id);
    }
}
