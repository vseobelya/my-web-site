import {Good} from './shared/tovar';
import {test} from './shared/data';
import { Injectable } from '@angular/core';



// @Injectable()
@Injectable({
  providedIn: 'root',
})
export class Tovar_service {
  spisok_tovarov: Good[];
  // newgood_name: string = '';
  // newgood_price: number = 0;
  constructor(@Inject(String) parameters) {
    this. spisok_tovarov = test;
  }

  //метод для возврата списка товаров
  get_tovar():Good[]{
  	return this.spisok_tovarov
  }

  //метод для добавления нового товара в список - исользуется в my-form
  addnewgood(newgood_name: string, newgood_price: number){
    test.push(new Good(newgood_name, newgood_price, 0));
  }

}
