import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class UserService {

  

  private apiUrl = 'http://localhost:3000';  // Your backend endpoint

  constructor(private http: HttpClient) {}  // Inject HttpClient

  // Method to create a new user with POST request
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+"/users/create", userData);  // POST request with form data
  }

  authUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+"/auth/login", userData);  // POST request with form data
  }
}
