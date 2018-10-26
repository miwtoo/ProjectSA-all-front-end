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
  }

}
