import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  valor: any;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    //Get saved list of students
    this.apiService.getall().subscribe(response => {
      this.valor =response.url;
     // this.studentsData = response;
    })
  }

}
