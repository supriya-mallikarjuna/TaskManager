import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  
  imports: [CommonModule,MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  editItem(){

  }
  deleteItem(){

  }

  items=[1,2
  ]
}
