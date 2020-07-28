import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ServiceHeroComponent } from './service-hero/service-hero.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, ServiceHeroComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
