import { Component } from '@angular/core';
import { getPosts } from './service/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'S10-Day5-Weekly-Project';
}
