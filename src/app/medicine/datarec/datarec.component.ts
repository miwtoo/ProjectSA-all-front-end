import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-datarec',
  templateUrl: './datarec.component.html',
  styleUrls: ['./datarec.component.css']
})
export class DatarecComponent implements OnInit {
  types = [];
  medicines = [];
  
  onClickSubmit(data) {

      data.user = 1;
      
      console.log(data);
      this.http.post("http://localhost:8080/MedicineData/addMedicineData",data).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        alert("สำเร็จ")
      },
      error => {
        console.log("Error", error);
        alert("ผิดพลาด " + error)
      }

    );
}constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/TypePill").subscribe(
      data => {
        //console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.types.push({
            value: data[index].id,
            viewValue: data[index].type
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
        console.log("GET Request is successful ", data);
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
