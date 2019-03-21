import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { appComponent } from "./app.component";
import { MobPartComponent } from './mob-part/mob-part.component';
import { BooksComponent } from './books/books.component';
import { CosmaticsComponent } from './cosmatics/cosmatics.component';
import { LaptopComponent } from './laptop/laptop.component'

@NgModule({
  declarations: [appComponent, MobPartComponent, BooksComponent, CosmaticsComponent, LaptopComponent],
  imports: [BrowserModule],
  bootstrap: [appComponent]
})
export class AppModule{

}