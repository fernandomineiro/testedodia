import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: Login
  constructor(public apiService: ApiService,
    public router: Router) {this.data = new Login();}


  ngOnInit() {
  }

  submitForm() {
    console.log(this.data);
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['api']);
    });

  }

}
