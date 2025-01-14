import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogItemComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,BlogRoutingModule
  ]
})
export class BlogModule { }

