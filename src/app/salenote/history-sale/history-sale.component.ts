import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import dateformat from 'dateformat';
export interface PeriodicElement {
  receiptID:String;
  name: string;
  date: Date;

}

@Component({
  selector: 'app-history-sale',
  templateUrl: './history-sale.component.html',
  styleUrls: ['./history-sale.component.css']
})
export class HistorySaleComponent implements OnInit {

  
  displayedColumns: string[] = ['receiptID' ,'name','date'];
  dataSource;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const ELEMENT_DATA: PeriodicElement[] = [];
    
    this.http.get("http://localhost:8080/salenote/receipt").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          ELEMENT_DATA.push({

            receiptID: data[index].id,
            name: data[index].user.name,
            date: data[index].date
          })
        }
        //console.log(ELEMENT_DATA);
        this.dataSource = ELEMENT_DATA;
      },
      error => {
        console.log("Error", error);
      }

    );
  }

}
