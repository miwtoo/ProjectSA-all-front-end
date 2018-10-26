import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-datarec',
  templateUrl: './datarec.component.html',
  styleUrls: ['./datarec.component.css']
})
export class DatarecComponent implements OnInit {
  types = [];
  medicines = [];
  medicineName = '';

  constructor(private http: HttpClient, private user:UserService) { }
  onClickSubmit(data) {

    data.user = this.user.getUserId();

    console.log(data);
    this.http.post("http://localhost:8080/MedicineData/addMedicineData", data).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        alert("บันทึกสำเร็จ")
      },
      error => {
        console.log("Error", error);
        alert("บันทึกข้อมูลผิดพลาด" + error)
      });
  }

  AddMedicine(data) {
    this.http.post("http://localhost:8080/Medicine/addMedicine/" + data.medicineName, "").subscribe(data => {
      console.log("POST Request is successful", data);
      alert('เพิ่มเรียบร้อย');
    }, error => {
      console.log("Fail Success", error);
      alert('ไม่สามารถเพิ่มได้');
    });
  }

  ngOnInit() {
    this.http.get("http://localhost:8080/Type").subscribe(
      data => {
        console.log("GET Request is successful Type", data);
        for (let index = 0; index < data["length"]; index++) {
          this.types.push({
            value: data[index].typeId,
            viewValue: data[index].typeName
          })
        }
        console.log(data);
      },
      error => {
        console.log("Error", error);
      }
    );

    this.http.get("http://localhost:8080/Medicine").subscribe(
      data => {
        console.log("GET Request is successful Medicine", data);
        for (let index = 0; index < data["length"]; index++) {
          this.medicines.push({
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
