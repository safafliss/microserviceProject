import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AddcontratComponent} from './contrat/addcontrat/addcontrat.component';
import {ListcontratComponent} from './contrat/listcontrat/listcontrat.component';
import {AddportfolioComponent} from './portfolio/addportfolio/addportfolio.component';
import {ListportfolioComponent} from './portfolio/listportfolio/listportfolio.component';
import {AddoffreemploisComponent} from './offreemplois/addoffreemplois/addoffreemplois.component';
import {ListoffreemploisComponent} from './offreemplois/listoffreemplois/listoffreemplois.component';
import {AddtestComponent} from './test/addtest/addtest.component';
import {ListtestComponent} from './test/listtest/listtest.component';
import {AddformationComponent} from './formation/addformation/addformation.component';
import {ListformationComponent} from './formation/listformation/listformation.component';
import {AddentretientComponent} from './entretient/addentretient/addentretient.component';
import {ListentretientComponent} from './entretient/listentretient/listentretient.component';
import { EditformationComponent } from './formation/editformation/editformation.component';







const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: CreateComponent, canActivate: [AuthGuard] },
  {path:'addcontrat',component:AddcontratComponent,canActivate:[AuthGuard]},
  {path:'listcontrat',component:ListcontratComponent,canActivate:[AuthGuard]},
  {path:'addportfolio',component:AddportfolioComponent,canActivate:[AuthGuard]},
  {path:'listportfolio',component:ListportfolioComponent,canActivate:[AuthGuard]},
  {path:'addoffreemplois',component:AddoffreemploisComponent,canActivate:[AuthGuard]},
  {path:'listoffreemplois',component:ListoffreemploisComponent,canActivate:[AuthGuard]},
  {path:'addtest',component:AddtestComponent,canActivate:[AuthGuard]},  
  {path:'listtest',component:ListtestComponent,canActivate:[AuthGuard]},

  {path:'addformation',component:AddformationComponent,canActivate:[AuthGuard]},
  {path:'listformation',component:ListformationComponent,canActivate:[AuthGuard]},
  {path:'editformation/:id',component:EditformationComponent,canActivate:[AuthGuard]},
  
  {path:'addentretient',component:AddentretientComponent,canActivate:[AuthGuard]},
  {path:'listentretient',component:ListentretientComponent,canActivate:[AuthGuard]},
    

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
