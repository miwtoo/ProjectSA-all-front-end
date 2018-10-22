import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface PeriodicElement { }
@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit {
  tel: '';
  name_pill: '';
  title = 'ระบบร้านขายยา';
constructor(private http: HttpClient) {}

  onClickSubmit(data) {

    if(data.date != null)
      data.date = data.date.getTime()
    console.log(data);
    this.http.post("http://localhost:8080/inform", data).subscribe(

      data => {
        console.log("POST Request is successful ", data);
        alert("สำเร็จ")
      },
      error => {
        console.log("Error", error);
        alert("ผิดพลาด อาจเกิดจากไม่มีชื่อยาหรือเบอร์โทรศัพท์ลูกค้า " + error)
      });
  }
  

  ngOnInit() {}
}


