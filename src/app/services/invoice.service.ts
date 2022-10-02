import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../models/invoice';

const baseURL = "http://localhost/meridionalis/api/invoices/invoices.php";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')}

  Create(data: Invoice){
    var jsonObj: any = {
      "name": data.name
    }

    var json = JSON.stringify(jsonObj);

    return this.http.post(baseURL, data).subscribe(response => console.log(response));
  }
}
