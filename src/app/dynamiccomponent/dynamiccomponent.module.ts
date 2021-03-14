import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule, Routes } from '@angular/router';
import { Comp1ncomp2Component } from './comp1ncomp2.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: Comp1ncomp2Component,
    children: [
      {
        path: 'comp1',
        component: Comp1Component
      },
      {
        path: 'comp2',
        component: Comp2Component
      },
      { path: '', redirectTo: 'comp1', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  declarations: [Comp1Component, Comp2Component, Comp1ncomp2Component],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [Comp1Component, Comp2Component]
})
export class DynamiccomponentModule { }
