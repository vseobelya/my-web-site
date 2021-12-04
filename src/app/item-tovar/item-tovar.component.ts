import { Component, Input} from '@angular/core';
import {test} from "../shared/data"
import {Good} from "../shared/tovar"
import {TovarServiceService} from '../tovar-service.service';

@Component({
  selector: 'app-item-tovar',
  templateUrl: './item-tovar.component.html',
  styleUrls: ['./item-tovar.component.css']
})
export class ItemTovarComponent{
  @Input() item: any;
  @Input() i:any;

  constructor(private tovar_service: TovarServiceService ) { }

  amountIncrease(){
    this.tovar_service.amountadd(this.item);
  }

  amountDecrease(){
    this.tovar_service.amountsubs(this.item);
  }

  delGood(){
    this.tovar_service.deletegood(this.item);
  }

}
