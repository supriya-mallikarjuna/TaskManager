import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [GoogleSigninButtonModule,FormsModule,CommonModule, MatIconModule,RouterModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
 
})
export class SignUpComponent {

  userForm: FormGroup;
  hidePassword = true;
  constructor(private fb: FormBuilder, private authService:SocialAuthService,private userService:UserService,private route:Router) {
    // Apply the custom validator to the form group
    this.userForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
       
      },
      
    );
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; // Toggle password visibility
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value.name);

      const formData = this.userForm.value;
      let userData={
        
          "username": this.userForm.get('name')?.value,
          "email":  this.userForm.get('email')?.value,
          "password":  this.userForm.get('password')?.value,
          "loginType": "manual"  // No password for social login
        }
      console.log(userData)
      this.createUser(userData)
     
    }
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user)
      let userData={
        "username": user.name,
        "email":  user.email,
        "loginType": "social"  // No password for social login
      }
      this.createUser(userData)
    });
  }


createUser(userData:any){
 // Call the service and subscribe to the response
 this.userService.createUser(userData).subscribe(
  (response) => {
    console.log('User created successfully:', response);  
    this.route.navigate(['/dashboard'])
  },
  (error) => {
    console.error('Error creating user:', error);  // Handle error
  }
);
}

}