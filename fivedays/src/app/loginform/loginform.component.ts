import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserLogin } from 'src/models/IUserLogin';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  userLogin() {
    const url = 'https://www.jsonbulut.com/json/userLogin.php';
    const sendParams = {
      ref: 'c7c2de28d81d3da4a386fc8444d574f2',
      userEmail: this.email,
      userPass: this.password,
      face: 'no',
    };

    // Rest Call
    //this.http.get(url, { params: sendParams } ).toPromise().then( res => {
    // res gelen sonuç ve datayı temsil eder.
    //console.log( res )
    //})
    const newToast = this.toast;
    const newRouter = this.router;
    this.http.get<IUserLogin>(url, { params: sendParams }).subscribe({
      next(res) {
        // res gelen sonuç ve datayı temsil eder.
        const user = res.user[0];
        const status = user.durum;
        const message = user.mesaj;
        if (status === true) {
          newToast.success(message, 'Giriş İşlemi');
          sessionStorage.setItem('user', JSON.stringify(user));
          newRouter.navigate(['/dashboard'])
        } else {
          newToast.error(message, 'Giriş İşlemi');
        }
      },
      error(err) {
        console.error(err);
        newToast.error(err.message, 'Giriş İşlemi');
      },
    });
  }
}
