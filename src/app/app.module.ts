import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Routes*/
import { APP_ROUTES } from './app.routes';

/*Components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

/* Services*/
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

/*Modules*/
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
