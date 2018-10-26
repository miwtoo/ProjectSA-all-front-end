import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
export interface PeriodicElement { }

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit {
  title = 'ระบบร้านขายยา';
  message = [];

  onClickSubmit(data) {

    data.date = data.date.getTime()
    console.log(data);
    this.http.post("http://localhost:8080/inform", data).subscribe(

      data => {
        console.log("POST Request is successful ", data);
        alert("สำเร็จ")
      },
      error => {
        console.log("Error", error);
        alert("ผิดพลาด " + error)
      });
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:8080/message").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.message.push({
            value: data[index].message,
            viewValue: data[index].message
          })
        }
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}


