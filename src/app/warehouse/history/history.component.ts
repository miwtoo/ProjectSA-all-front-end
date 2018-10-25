import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import dateformat from 'dateformat';
export interface PeriodicElement {
  type:String;
  name: string;
  itemName:string;
  amount: number;
  unit:String;
  time: Date;
  date: Date;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  
  displayedColumns: string[] = ['type' ,'name', 'itemName', 'amount','unit',  'date', 'time'];
  dataSource;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const ELEMENT_DATA: PeriodicElement[] = [];
   

    
    this.http.get("http://localhost:8080/history").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          ELEMENT_DATA.push({
            type: data[index].status.name,
            name: data[index].user.personnel.name,
            itemName: data[index].item.name,
            amount: data[index].amount,
            unit: data[index].unit.name,
            time: dateformat( new Date(data[index].date), "h:MM:ss TT"),
            date: dateformat( new Date(data[index].date), "dd mmmm yyyy")
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
