import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlusExComponent } from './cmps/plus-ex/plus-ex.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './cmps/header/header.component';
import { AnimationComponent } from './cmps/animation/animation.component';
import { MinusExComponent } from './cmps/minus-ex/minus-ex.component';
import { MultipleComponent } from './cmps/multiple/multiple.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { ComplexExComponent } from './cmps/complex-ex/complex-ex.component';
import { BalloonsComponent } from './cmps/balloons/balloons.component';
import { WelcomeComponent } from './cmps/welcome/welcome.component';
import { KidsComponent } from './cmps/kids/kids.component';
import { CountComponent } from './cmps/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusExComponent,
    SignupComponent,
    HomePageComponent,
    HeaderComponent,
    AnimationComponent,
    MinusExComponent,
    MultipleComponent,
    FooterComponent,
    ComplexExComponent,
    BalloonsComponent,
    WelcomeComponent,
    KidsComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
