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

    this.http.post("http://localhost:8080/item/" + "/" + body.item_name + "/" + body.price + "/" + body.categorys, "").subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }

    );

  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.categorys.push(

    )

    this.http.get("http://localhost:8080/category").subscribe(
      body => {
        console.log("GET Request is successful ", body);
        for (let index = 0; index < body["length"]; index++) {
          this.categorys.push({
            value: body[index].id,
            viewValue: body[index].name
          })


        }
        //console.log(ELEMENT_DATA);
      },
      error => {
        console.log("Error", error);
      }

    );
  }

}
