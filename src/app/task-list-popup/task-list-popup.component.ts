import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list-popup',
  standalone: true,
  imports: [FormsModule,RouterModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormFieldModule,CommonModule],
  templateUrl: './task-list-popup.component.html',
  styleUrl: './task-list-popup.component.css'
})
export class TaskListPopupComponent {

  itemName: string = '';  // The input field's data binding

  constructor(
    public dialogRef: MatDialogRef<TaskListPopupComponent>
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
