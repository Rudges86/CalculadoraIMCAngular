import { AjudaComponent } from './views/ajuda/ajuda.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sobre',component:SobreComponent},
  {path:'ajuda',component:AjudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
