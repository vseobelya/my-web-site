import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListComponent } from './mylist/mylist.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ItemTovarComponent } from './item-tovar/item-tovar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MyFormComponent,
    ItemTovarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
