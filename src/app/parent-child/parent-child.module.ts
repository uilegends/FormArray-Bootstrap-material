import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ParentchildComponent } from './parentchild.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {
    path: '',
    component: ParentchildComponent,
    children: [
      { path: '', redirectTo: 'child', pathMatch: 'full' },
      {
        path: 'child',
        component: ChildComponent
      },
      {
        path: 'parent',
        component: ParentComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ChildComponent, ParentComponent, ParentchildComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ParentChildModule { }
