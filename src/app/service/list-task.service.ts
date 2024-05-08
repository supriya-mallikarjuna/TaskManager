import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ListTaskService {
  private apiUrl = "http://localhost:3000"; // Your backend endpoint

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Method to create a new user with POST request
  getAllListsAndTasks(): Observable<any> {
    return this.http.get(this.apiUrl + "/list/all"); // POST request with form data
  }
  createList(data:any): Observable<any> {
    return this.http.post(this.apiUrl + "/list/create",data); 

  }
  createTask(data:any,listId:any): Observable<any> {
    return this.http.post(this.apiUrl + "/task/"+listId+"/createTask",data); 

  }
  editTask(taskId: any, title: any) {
    return this.http.put(this.apiUrl + "/task/" + taskId, title);
  }
  deleteTask(taskId: any) {
    return this.http.delete(this.apiUrl + "/task/" +taskId);
}
}
