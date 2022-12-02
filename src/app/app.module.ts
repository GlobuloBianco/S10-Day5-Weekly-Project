import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { UsersComponent } from './components/users/users.component';
import { EvidenziaDirective } from './components/directives/evidenzia.directive';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { DettagliPostsComponent } from './components/dettagli-posts/dettagli-posts.component';
import { AntiVirgolettePipe } from './pipes/anti-virgolette.pipe';
import { UsersDettagliComponent } from './components/users-dettagli/users-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    UsersComponent,
    EvidenziaDirective,
    MaiuscoloPipe,
    DettagliPostsComponent,
    AntiVirgolettePipe,
    UsersDettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
