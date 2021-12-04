import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import {test} from "../shared/data"
import {Good} from "../shared/tovar"

@Component({
  selector: 'mylist-root',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})

export class MyListComponent{
  @Input() test:any;

  deletegood(del_good: any){
    let index = test.indexOf(del_good);
    if(index > -1)
        test.splice(index, 1);
  }
}
