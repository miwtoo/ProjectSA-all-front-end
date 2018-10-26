import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { log } from 'util';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  categorys = [];
  used = [];
  timepill = [];
  typepill = [];
  onClickSubmit(body) {
    console.log(body);

    this.http.post("http://localhost:8080/pill", body).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        alert("สำเร็จ")
      },
      error => {
        console.log("Error", error);
      }

    );

  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/used").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.used.push({
            value: data[index].used,
            viewValue: data[index].used
          })
        }
      },
      error => {
        console.log("Error", error);
      }
    );

    this.http.get("http://localhost:8080/timepill").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.timepill.push({
            value: data[index].timepill,
            viewValue: data[index].timepill
          })
        }
      },
      error => {
        console.log("Error", error);
      }
    );

    
    this.http.get("http://localhost:8080/typepill").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.typepill.push({
            value: data[index].typepill,
            viewValue: data[index].typepill
          })
        }
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
