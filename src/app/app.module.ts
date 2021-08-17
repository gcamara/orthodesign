import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { WelcomeComponent } from './headers/welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { ServicosComponent } from './sections/servicos/servicos.component';
import { SobreComponent } from './sections/sobre/sobre.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EquipeComponent } from './sections/equipe/equipe.component';
import { MembroComponent } from './sections/equipe/membro/membro.component';
import { FooterComponent } from './footer/footer.component';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    ServicosComponent,
    SobreComponent,
    EquipeComponent,
    MembroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgxGoogleAnalyticsModule.forRoot('UA-144179117-1')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
