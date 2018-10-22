import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import dateformat from 'dateformat';
export interface PeriodicElement {
  name: string;
  id: number;
  tel: String;
  pill: string;
  used: string;
  type: string;
  time: string;
  date: Date;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'tel', 'pill', 'used', 'type', 'time', 'date'];
  dataSource = new MatTableDataSource();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const ELEMENT_DATA: PeriodicElement[] = [];

     this.http.get("http://localhost:8080/inform").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          ELEMENT_DATA.push({
            id: data[index].customer.profilesid,
            name: data[index].customer.firstname +'    '+ data[index].customer.lastname,
            tel: data[index].customer.telephonenumber,
            pill: data[index].pill.name,
            used: data[index].pill.used.useds,
            type: data[index].pill.typePill.type,
            time: data[index].pill.timePills.timepill,
            date: dateformat(new Date(data[index].date), "dd mmmm yyyy")
          })
        }
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      },
      error => {
        console.log("Error", error);
      });
  }
}





