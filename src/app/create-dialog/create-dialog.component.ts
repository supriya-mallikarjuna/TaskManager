import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-create-dialog',
  standalone: true,
  imports: [FormsModule,RouterModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormFieldModule,CommonModule],

  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.css'
})
export class CreateDialogComponent {

  itemName: string = '';  // The input field's data binding

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>
  ) {}

  // Method to handle cancel action
  onCancel(): void {
    this.dialogRef.close();  // Closes the dialog without returning data
  }

  // Method to handle create action
  onCreate(): void {
    this.dialogRef.close(this.itemName);  // Closes the dialog and returns the input value
  }
}

