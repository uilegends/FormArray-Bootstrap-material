import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'dycomp',
    loadChildren: () => import('./dynamiccomponent/dynamiccomponent.module').then(m => m.DynamiccomponentModule)
  },
  {
    path: 'parent-child',
    loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
