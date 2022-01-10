import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) {
  }

  ngOnInit() { 
    this.initForm();
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res) {
        this.signupForm.reset()
        this.router.navigate(['']);
      }
    })
  }

  initForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      avatar: [''],
      password: ['', Validators.required]
    })
  }

}
