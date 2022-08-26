import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//-- component
import { CalcultorComponent } from './components/calcultor/calcultor.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { NavamenuComponent } from './components/navmenu/navamenu/navamenu.component';
import { AboutasComponent } from './components/aboutas/aboutas/aboutas.component';
import { NewinfoComponent } from './components/newinfo/newinfo/newinfo.component';
//-------

const routes: Routes = [

{path:'',redirectTo:'/calcultor',pathMatch:'full'},
{path:'calcultor',component:CalcultorComponent},
{path:'signup',component:SignupComponent},
{path:'navmenu',component:NavamenuComponent},
{path:'aboutas',component:AboutasComponent},
{path:'newinfo',component:NewinfoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
