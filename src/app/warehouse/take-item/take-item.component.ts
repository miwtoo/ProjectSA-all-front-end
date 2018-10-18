import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { dateformat } from 'dateformat';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-take-item',
  templateUrl: './take-item.component.html',
  styleUrls: ['./take-item.component.css']
})


export class TakeItemComponent implements OnInit {
  units = [];
  types = [];

  onClickSubmit(data) {
    //let dateFormat = dateformat;
    //let now = new Date();

    //console.log(this.userService.getUserId());
    data.user = this.userService.getUserId()

    console.log(data);

    this.http.post("http://localhost:8080/history", data).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        alert("สำเร็จ")
      },
      error => {
        console.log("Error", error);
        alert("ผิดพลาด " + error)
      }

    ); 
  }
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/unit").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.units.push({
            value: data[index].id,
            viewValue: data[index].name
          })
        }
      },
      error => {
        console.log("Error", error);
      }
    );

    this.http.get("http://localhost:8080/type").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.types.push({
            value: data[index].id,
            viewValue: data[index].name
          })
        }
      },
      error => {
        console.log("Error", error);
      }
    );

  }

}
