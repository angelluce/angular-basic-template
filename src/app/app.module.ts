import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import { HomeComponent } from './components/home/home.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    TableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
