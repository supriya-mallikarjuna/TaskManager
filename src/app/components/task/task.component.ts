import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { ListTaskService } from "../../service/list-task.service";
import { CreateDialogComponent } from "../../reusable-components/create-dialog/create-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-task",
  standalone: true,

  imports: [CreateDialogComponent,CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  constructor(private listTaskService: ListTaskService,   public dialog: MatDialog,) {}

  @Input() selectedList: any | null = null;
  @Output() taskDeleted = new EventEmitter<any>();
  @Output() taskEdited = new EventEmitter<any>();

  deleteTask(task: any): void {
    this.listTaskService.deleteTask(task.id).subscribe(
      (response) => {
        console.log("edittask successfull:", response);
        this.taskDeleted.emit(task);
      },
      (error) => {
        console.error(
          "Error creating user:",
          JSON.stringify(error.error.error)
        );
      }
    );
  }
  editTask(task: any): void {
    console.log(task);
    this.openDialog('0ms', '0ms',task,"edit task","Edit")
  }

  editTaskApi(taskData:any){
    console.log(".....",taskData.taskDetails)
    // const updatedTask = { ...task, title: "Updated Title" };
    let data = {
      title: taskData.taskDetails.title,
    };

    this.listTaskService.editTask(taskData.taskDetails.id, data).subscribe(
      (response) => {
        console.log("edittask successfull:", response);
        // this.taskEdited.emit(updatedTask);
      },
      (error) => {
        console.error(
          "Error creating user:",
          JSON.stringify(error.error.error)
        );
      }
    );
  }

  openDialog(enterAnimationDuration: string,exitAnimationDuration: string, task:any,dialogTitle:any,buttonTitle:any ): void {
    const dialogRef =  this.dialog.open(CreateDialogComponent, {
      width: "500px",
      enterAnimationDuration,
      exitAnimationDuration,
      data: { title: dialogTitle, taskDetails:task,buttonTitle:buttonTitle},
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.action === 'editTask') {
        console.log('Create action chosen', result.data);
        this.editTaskApi(result.data)
        // Handle the "create" action here (e.g., create a new item)
      } else if (result?.action === 'close') {
        console.log('Dialog closed');
        // Handle the "close" action here (e.g., do nothing or clean up)
      }
    });
   
  }
}
