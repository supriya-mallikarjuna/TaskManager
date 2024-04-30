import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { TaskComponent } from '../task/task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ListComponent,TaskComponent,MatIconModule,MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
