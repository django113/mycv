import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  {path:'',component:PortfolioComponent},
  { path: '**', component: PortfolioComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
