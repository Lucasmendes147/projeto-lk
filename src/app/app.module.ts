import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { NavibarComponent } from './_components/navibar/navibar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BaseUIComponent } from './_components/base-ui/base-ui.component';
import { UsersComponent } from './Home/users/users.component';
import { UserComponent } from './_components/user/user.component';
import { MeioPaginaComponent } from './_components/meio-pagina/meio-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BaseUIComponent,
    UsersComponent,
    UserComponent,
    MeioPaginaComponent,
  ],
  imports: [
    BrowserModule,
    NavibarComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
