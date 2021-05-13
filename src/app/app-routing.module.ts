import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from '../app/pages/home-page/home-page.component'
import { AnimationComponent } from './cmps/animation/animation.component';
import { MinusExComponent } from './cmps/minus-ex/minus-ex.component';
import { PlusExComponent } from './cmps/plus-ex/plus-ex.component';
import { MultipleComponent } from './cmps/multiple/multiple.component';
import { ComplexExComponent } from './cmps/complex-ex/complex-ex.component';

const routes: Routes = [
  { path: 'animation', component: AnimationComponent},
  { path: 'complex-ex', component: ComplexExComponent},
  { path: 'minus-ex', component: MinusExComponent},
  { path: 'multiple', component: MultipleComponent},
  { path: 'plus-ex', component: PlusExComponent},
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
