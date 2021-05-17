import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from '../app/pages/home-page/home-page.component'
import { AnimationComponent } from './cmps/animation/animation.component';
import { MinusExComponent } from './cmps/minus-ex/minus-ex.component';
import { PlusExComponent } from './cmps/plus-ex/plus-ex.component';
import { MultipleComponent } from './cmps/multiple/multiple.component';
import { ComplexExComponent } from './cmps/complex-ex/complex-ex.component';
import { BalloonsComponent} from '../app/cmps/balloons/balloons.component'
import { WelcomeComponent} from '../app/cmps/welcome/welcome.component'
import { KidsComponent} from '../app/cmps/kids/kids.component'
import { CountComponent} from '../app/cmps/count/count.component'
const routes: Routes = [
  { path: 'animation', component: AnimationComponent},
  { path: 'complex-ex', component: ComplexExComponent},
  { path: 'minus-ex', component: MinusExComponent},
  { path: 'multiple', component: MultipleComponent},
  { path: 'plus-ex', component: PlusExComponent},
  { path: 'balloons', component: BalloonsComponent},
  { path: 'kids', component: KidsComponent},
  { path: 'count', component: CountComponent},
  { path: 'home', component: HomePageComponent },
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
