import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userArr = [
    {
      username: 'admin@test.com',
      password: '12345678'
    }
  ];
  loginForm: FormGroup;
  isCredential = true;
  constructor(private route: Router){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if(this.loginForm?.valid){
      if(this.loginForm.value.email === this.userArr[0].username && this.loginForm.value.password === this.userArr[0].password){
        // console.log(this.loginForm?.value.email);
        this.route.navigate(['task-info']);
      } else {
        this.isCredential = false;
        this.loginForm?.patchValue(
          {
            password: ''
          }
        )
      }
    }
   }


}
