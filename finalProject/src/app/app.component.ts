import { Component } from '@angular/core';
import { Product } from './Model/model';
import { ProductList } from './Model/repository';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalProject';
  newDate:string = '';

constructor() {

}

search(): void {

}

}
