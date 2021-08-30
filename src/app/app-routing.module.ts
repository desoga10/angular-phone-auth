import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';

const routes: Routes = [
  { path: 'phone', component: PhoneNumberComponent },
  { path: 'code', component: CodeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/phone', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
