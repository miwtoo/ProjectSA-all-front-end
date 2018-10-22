  import { Component, OnInit, Inject  } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../service/register/register.service';


  @Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
  })

  export class CustomerComponent implements OnInit {
  prefixs: Array<any>;
  sexs: Array<any>;
  allergys: Array<any>;
  telephonenumber='';
  firstname='';
  lastname='';
  sexsent='';
  prefixsent='';
  allergysent='';

    constructor(private registerService: RegisterService,private httpClient: HttpClient) { }

    ngOnInit() {
        this.registerService.getPrefix().subscribe(data => {
        this.prefixs = data;
        console.log(this.prefixs);
      });

    this.registerService.getSex().subscribe(data => {
        this.sexs = data;
        console.log(this.sexs);
      });

    this.registerService.getDisease().subscribe(data => {
        this.allergys = data;
        console.log(this.allergys);
      });

    }


  save() {
      if (this.telephonenumber=== '' || this.firstname === ''|| this.lastname === ''||this.sexsent===''
          ||this.prefixsent===''||this.allergysent===''||this.telephonenumber.length<9) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      }


       else {
        this.httpClient.post('http://localhost:8080/add',
        {

        "tel":this.telephonenumber,
        "prefix":this.prefixsent,
        "lname":this.lastname,
        "fname":this.firstname,
        "sex":this.sexsent,
        "allergy":this.allergysent

        }
        ).subscribe(
            data => {
                alert('บันทึกเรียบร้อย');
                console.log('Post Request is successful', data);

            },
            error => {
                console.log('Rrror', error);
                alert('ไม่สามารถบันทึกได้ server ผิดพลาดหรือมีข้อมูลอยู่แล้ว(เบอร์โทรนี้ลงทะเบียนแล้ว)');
            }
        );
      }
    }


  clear(){
  this.telephonenumber='';
  this.firstname='';
  this.lastname='';
  this.sexsent='';
  this.prefixsent='';
  this.allergysent='';


  }

  keyPressphone(event: any) {
      const pattern = /[0-9\+\-\ ]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }

  keyPressname(event: any) {
      const pattern = /[a-z\A-Z\ก-อ\่-๋\ุ\ู\ไ\ึ\ำ\โ\เ\็\า\แ\ิ\ื\์\ี\ใ]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
}
