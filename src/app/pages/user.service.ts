import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "http://localhost:8080/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMesage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.BASE_URL, user)
  }

  readUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL)
  }

  readUsersbyID(id: number): Observable<User>{
    const url = `${this.BASE_URL}/${id}`
    return this.http.get<User>(url)
  }

  readUsersbyCpf(cpf: number): Observable<User>{
    const url = `${this.BASE_URL}/cpf/${cpf}`
    console.log(url)
    
    return this.http.get<User>(url)

  }

  update(user: User): Observable<User> {
    const url: string = `${this.BASE_URL}/${user.cpf}`;
    return this.http.put<User>(url, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMesage('Ocorreu um erro!');
    return EMPTY;
  }

  delete(cpf: number): Observable<User>{
    const url = `${this.BASE_URL}/${cpf}`;
    console.log(url)
    return this.http.delete<User>(url);
  }

  reloadPage():void{
    location.reload()
  }
}
