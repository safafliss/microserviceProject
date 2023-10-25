import { TokenInterceptor } from './token.interceptor';
import { APP_CONFIG, IAppConfig } from './shared/appconfig';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListcontratComponent } from './contrat/listcontrat/listcontrat.component';
import { AddcontratComponent } from './contrat/addcontrat/addcontrat.component';
import { AddportfolioComponent } from './portfolio/addportfolio/addportfolio.component';
import { ListportfolioComponent } from './portfolio/listportfolio/listportfolio.component';
import { ListoffreemploisComponent } from './offreemplois/listoffreemplois/listoffreemplois.component';
import { AddoffreemploisComponent } from './offreemplois/addoffreemplois/addoffreemplois.component';
import { AddtestComponent } from './test/addtest/addtest.component';
import { ListtestComponent } from './test/listtest/listtest.component';
import { ListformationComponent } from './formation/listformation/listformation.component';
import { AddformationComponent } from './formation/addformation/addformation.component';
import { AddentretientComponent } from './entretient/addentretient/addentretient.component';
import { ListentretientComponent } from './entretient/listentretient/listentretient.component';
import { CommonModule } from '@angular/common';
import { EditformationComponent } from './formation/editformation/editformation.component';



const AppConfig: IAppConfig = {
  apiEndPoint: environment.apiEndPoint,
};

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ListcontratComponent,
    AddcontratComponent,
    AddportfolioComponent,
    ListportfolioComponent,
    ListoffreemploisComponent,
    AddoffreemploisComponent,
    AddtestComponent,
    ListtestComponent,
    ListformationComponent,
    AddformationComponent,
    AddentretientComponent,
    ListentretientComponent,
    EditformationComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
