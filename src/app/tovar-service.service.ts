import {Good} from './shared/tovar';
import {test} from './shared/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TovarServiceService {

  spisok_tovarov: Good[];

  constructor() {
    this. spisok_tovarov = test;
  }


  //метод для добавления нового товара в список - исользуется в my-form
  addnewgood(newgood_name: string, newgood_price: number){
    test.push(new Good(newgood_name, newgood_price, 0));
  }


  // метод для увеличения количества товара - исользуется в item-tovar
  amountadd(item: Good){

    let index = test.indexOf(item);
    test[index].amount++;
  }

  // метод для уменьшения количества товара - исользуется в item-tovar
  amountsubs(item: Good){
    let index = test.indexOf(item);
    if(test[index].amount > 0)
        test[index].amount--;
  }


  // метод для удаления товара - исользуется в item-tovar
  deletegood(item: any){
    let index = test.indexOf(item);
    if(index > -1)
        test.splice(index, 1);
  }


  //метод для возврата списка товаров - исользуется в mylist
  get_tovar():Good[]{
  	return this.spisok_tovarov
  }


}
