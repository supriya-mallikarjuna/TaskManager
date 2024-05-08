import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Method to handle cancel action
  onCancel(): void {
    this.dialogRef.close();
    this.clearData()  // Closes the dialog without returning data
  }

  // Method to handle create action
  onCreate(): void {
    console.log("....",this.data)
    if(this.data.title == "create new list"){
      this.dialogRef.close({ action: 'createList', data: this.data });
     
    } if(this.data.title == "edit task"){
      this.dialogRef.close({ action: 'editTask', data: this.data });
      
    }if(this.data.title == "create new task"){
      this.dialogRef.close({ action: 'createTask', data: this.data });
     
    }
    // this.clearData();
   // Closes the dialog and returns the input value
  }

  clearData(): void {
    this.data.taskDetails.title = ''; // Clear the input data
  }
}

