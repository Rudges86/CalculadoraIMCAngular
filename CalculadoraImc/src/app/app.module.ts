import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './templates/components/head/head.component';
import { FooterComponent } from './templates/components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { AjudaComponent } from './views/ajuda/ajuda.component';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    AjudaComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
