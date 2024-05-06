import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { TaskComponent } from '../../components/task/task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../../reusable-components/create-dialog/create-dialog.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ListComponent,TaskComponent,MatIconModule,MatButtonModule,CreateDialogComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
