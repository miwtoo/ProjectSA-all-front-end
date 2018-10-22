import {Component,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";


// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})




export class RecordComponent implements OnInit {

  

  private person_id: number;

  displayedColumns: string[] = ['intime', 'codenum', 'name', 'depart'];
  dataSource = new MatTableDataSource();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor( private httpClient: HttpClient){}

  record(){
    this. recordperson(this.person_id).subscribe(data => {
      console.log( "Record Success" , data) ;
      alert('บันทึกเรียบร้อย');

    },error =>{
      console.log("Fail Success", error);
      alert('ไม่สามารถบันทึกได้ server ผิดพลาดหรือไม่มีข้อมูล');

    })

  }
  recordperson(person_id: number){
    return this.httpClient.post('//localhost:8080/Records',{

  
      "person": person_id

    });



  }

  
  ngOnInit() {

  }

}

export interface PeriodicElement {
  name: string;
  intime: string;
  codenum: string;
  depart: string;
}




