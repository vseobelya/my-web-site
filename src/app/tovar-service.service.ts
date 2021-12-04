import {Good} from './shared/tovar';
import {test} from './shared/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TovarServiceService {

  constructor() { }


  //метод для добавления нового товара в список - исользуется в my-form
  addnewgood(newgood_name: string, newgood_price: number){
    test.push(new Good(newgood_name, newgood_price, 0));
  }
}
