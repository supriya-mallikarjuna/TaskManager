import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { TaskComponent } from '../task/task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TaskListPopupComponent } from '../task-list-popup/task-list-popup.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ListComponent,TaskComponent,MatIconModule,MatButtonModule,TaskListPopupComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TaskListPopupComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
