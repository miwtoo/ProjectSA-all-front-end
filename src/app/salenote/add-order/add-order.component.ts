import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTable } from '@angular/material';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  displayedColumns = ['item', 'amount', 'cost'];
  transactions = [];
  currentSalenote;
  @ViewChild('myTable') myTable: MatTable<any>;

  onClickSubmit(body) {
    body.receipt = this.currentSalenote.id;
   console.log(body)
    this.http.post("http://localhost:8080/salenote/orders", body).subscribe(
      data => {
        console.log("POST Request is successful ", data);
         this.transactions.push({
                item: data.pill.name,
                amount: data.amount,
                cost: data.pill.price*data.amount
              })
         this.myTable.renderRows();

      },
      error => {
        console.log("Error", error);
      }
    );
  }
  constructor(private http: HttpClient, private user: UserService) {
  }

  ngOnInit() {

     this.http.post("http://localhost:8080/salenote/receipt/" + this.user.getUserId(), "").subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.currentSalenote = data;
        console.log(this.currentSalenote.id)
      },
      error => {
        console.log("Error", error);
      }

    ); 
  }

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
