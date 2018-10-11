import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onClickSubmit(body){
    console.log(body);

    this.http.post("http://localhost:8080/user",body).subscribe(
      data => {
        console.log(data);
        
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
