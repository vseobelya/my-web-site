import { Component} from '@angular/core';
import {Good} from '../shared/tovar';
import {test} from '../shared/data';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent{

  constructor() { }

  ngOnInit(): void {

  }
  newgood_name: string = '';
  newgood_price: number = 0;

  addnewgood(){
    test.push(new Good(this.newgood_name, this.newgood_price, 0));
    this.newgood_name = '';
    this.newgood_price = 0;
  }
}
