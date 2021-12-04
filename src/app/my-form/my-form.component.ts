import { Component} from '@angular/core';
import {TovarServiceService} from '../tovar-service.service';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent{

  newgood_name: string = '';
  newgood_price: number = 0;

  constructor(private tovar_service: TovarServiceService ) { }

  ngOnInit(): void {

  }

  addGood(newgood_name: string, newgood_price: number){
    this.tovar_service.addnewgood(newgood_name, newgood_price);
    this.newgood_name = '';
    this.newgood_price = 0;
  }

  // addnewgood(){
  //   test.push(new Good(this.newgood_name, this.newgood_price, 0));
  //   this.newgood_name = '';
  //   this.newgood_price = 0;
  // }
}
