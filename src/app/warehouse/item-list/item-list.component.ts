import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: string;
  name: string;
  type: string;
  price: number;
}


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
   

  displayedColumns: string[] = ['id', 'name', 'type', 'price'];
  dataSource = new MatTableDataSource();

 
    
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const ELEMENT_DATA: PeriodicElement[] = [];
    
    this.http.get("http://localhost:8080/item").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          ELEMENT_DATA.push({
            id: data[index].id,
            name: data[index].itemName,
            type: data[index].category.name,
            price: data[index].price
          })


        }
        //console.log(ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      },
      error => {
        console.log("Error", error);
      }

    );

    
  }

}
