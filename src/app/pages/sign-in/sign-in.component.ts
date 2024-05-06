import {
  GoogleSigninButtonModule,
  SocialAuthService,
} from "@abacritt/angularx-social-login";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterModule } from "@angular/router";
import { UserService } from "../../service/user.service";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { SnackbarComponent } from "../../reusable-components/snackbar/snackbar.component";

@Component({
  selector: "app-sign-in",
  standalone: true,
  imports: [
    GoogleSigninButtonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CommonModule,
    SnackbarComponent
  ],
  templateUrl: "./sign-in.component.html",
  styleUrl: "./sign-in.component.css",
})
export class SignInComponent {
  userForm: FormGroup;
  durationInSeconds = 5;
  hidePassword = true;
  constructor(
    private fb: FormBuilder,
    private authService: SocialAuthService,
    private userService: UserService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {
    // Apply the custom validator to the form group
    this.userForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; // Toggle password visibility
  }

  gotoDashboard() {
    this.route.navigate(["/dashboard"]);
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      let userData = {
        email: user.email,
      };
      this.authenticateUser(userData);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log("Form Submitted:", this.userForm.value.name);

      const formData = this.userForm.value;
      let userData = {
        email: this.userForm.get("email")?.value,
        password: this.userForm.get("password")?.value,
      };
      console.log(userData);
      this.authenticateUser(userData);
    }
  }

  authenticateUser(userData: any) {
    this.userService.authUser(userData).subscribe(
      (response) => {
        console.log("User authencation successfull:", response);
        this.route.navigate(["/dashboard"]);
      },
      (error) => {
        console.error(
          "Error creating user:",
          JSON.stringify(error.error.error)
         
        ); // Handle error
        this.openSnackBar(error.error.error)
      }
    );
  }

  openSnackBar(err:any) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: { message: err },
    });
  }
}
