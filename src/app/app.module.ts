/* app.module.ts */
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components
import { AppComponent } from './app.component';
 
//Service for Pastebin
 
import { PastebinService } from "./pastebin.service";
 
//Modules used in this tutorial
import { HttpModule }    from '@angular/http';
 
//In memory Web api to simulate an http server
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PastebinComponent } from './pastebin/pastebin.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    PastebinComponent,
  ],
   
  imports: [
    BrowserModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [PastebinService],
  bootstrap: [AppComponent]
})
export class AppModule { }