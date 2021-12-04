import { Component, Input, Output, EventEmitter} from '@angular/core';
import {test} from "../shared/data"
import {Good} from "../shared/tovar"

@Component({
  selector: 'app-item-tovar',
  templateUrl: './item-tovar.component.html',
  styleUrls: ['./item-tovar.component.css']
})
export class ItemTovarComponent{
  @Input() item:any;
  @Input() i:any;

  @Output() del_good = new EventEmitter<Good>();

  amountadd(){

    let index = test.indexOf(this.item);
    test[index].amount++;
  }

  amountsubs(){
    let index = test.indexOf(this.item);
    if(test[index].amount > 0)
        test[index].amount--;
  }

  deletegood(del_good: any){
    this.del_good.emit(del_good);
  }

}
