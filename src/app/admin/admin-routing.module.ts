import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: 'verifyUser', component: VerifyComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
