import { Component } from "@angular/core";
import { ListComponent } from "../../components/list/list.component";
import { TaskComponent } from "../../components/task/task.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { CreateDialogComponent } from "../../reusable-components/create-dialog/create-dialog.component";
import { ListTaskService } from "../../service/list-task.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    ListComponent,
    TaskComponent,
    MatIconModule,
    MatButtonModule,
    CreateDialogComponent,
    CommonModule
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {
  lists: any[] = [];
  selectedList: any | null = null;
  taskDetails = {
    title: "",
  };
  showTaskButton=false

  constructor(
    public dialog: MatDialog,
    private listTaskService: ListTaskService
  ) {}
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    task: any,
    dialogTitle: any,
    buttonTitle: any
  ): void {
    var dialogRef = this.dialog.open(CreateDialogComponent, {
      width: "500px",
      enterAnimationDuration,
      exitAnimationDuration,
      data: { title: dialogTitle, taskDetails: task, buttonTitle: buttonTitle },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(".....", JSON.stringify(result));
      console.log(".....", JSON.stringify(result));
     
      if (result?.action == "createList") {
        let data = {
          name: result.data.taskDetails.title,
        };
        this.createList(data);
     
      } else if (result?.action == "createTask") {
        let data = {
          title: result.data.taskDetails.title,
        };
        this.createTask(data,this.selectedList.id);
      }
    });
  }

  ngOnInit() {
    this.getAllList();
  }

  createList(data: any) {
    this.listTaskService.createList(data).subscribe(
      (response) => {
        console.log("LIST created:", response);
      },
      (error) => {
        console.error("Error creating list:", error); // Handle error
      }
    );
  }

  createTask(data: any,taskId:any){
    this.listTaskService.createTask(data,taskId).subscribe(
      (response) => {
        console.log("task created:", response);
      },
      (error) => {
        console.error("Error creating task:", error); // Handle error
      }
    );
  }
  getAllList() {
    // Call the service and subscribe to the response
    this.listTaskService.getAllListsAndTasks().subscribe(
      (response) => {
        console.log("LISTS:", response);
        this.lists = response;
      },
      (error) => {
        console.error("Error creating user:", error); // Handle error
      }
    );
  }

  onListSelected(list: any): void {
    console.log("oooooo",list)
    this.showTaskButton=true
    this.selectedList = list; // Update the selected list when a list is clicked
  }

  onTaskEdited(editedTask: any): void {}
  onTaskDeleted(task: any): void {
    this.selectedList.tasks = this.selectedList.tasks.filter(
      (t: any) => t.id !== task.id
    ); // Remove the deleted task from the list
  }
}
