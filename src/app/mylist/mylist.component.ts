import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import {Good} from '../shared/tovar';
import {TovarServiceService} from '../tovar-service.service';

@Component({
  selector: 'mylist-root',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})

export class MyListComponent implements OnInit{
  NewTovar: Good[];
  constructor(private tovar_service: TovarServiceService){
    this.NewTovar = [];
  }

  ngOnInit(){
    this.NewTovar = this.tovar_service.get_tovar();
  }
}
