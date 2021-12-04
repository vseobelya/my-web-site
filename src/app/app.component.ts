import { Component } from '@angular/core';
import {Good} from './shared/tovar';
import {test} from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test: Good[] = test;
  title = 'my-web-site';
}
