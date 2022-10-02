import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service';
import { FormsModule, ReactiveFormsModule, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(
    private invoiceService: InvoiceService,
  ) {
    this.invoiceForm = new FormGroup({
      api: new FormControl(''),
      name: new FormControl('')
    })
  }

  ngOnInit(): void { }

  Create()
  {
     var invoice = this.invoiceForm.value;
     console.log("create invoice");
     
     this.invoiceService.Create(invoice);
  }
}
