import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.http.get('http://localhost:5000/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    })
  }
}
