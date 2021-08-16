import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FruitsComponent } from './components/fruits/fruits.component';


import { HomeComponent } from './components/home/home.component';
import { HomeappliancesComponent } from './components/homeappliances/homeappliances.component';


import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
{path:'home', component:HomeComponent},
{path:'fruits' , component:FruitsComponent},
{path:'homeappliances' ,component:HomeappliancesComponent},
{path:'electronics', component:ElectronicsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
