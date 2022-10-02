import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './components/invoices/createinvoice/createinvoice.component';

const routes: Routes = [
  {path: '', redirectTo: 'invoices/create/', pathMatch: 'full' },
  {path: 'invoices/create', component: CreateInvoiceComponent, pathMatch: 'full' }
  //{path: 'leave/viewall', component: ViewAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
