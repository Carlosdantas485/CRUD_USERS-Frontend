import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[]

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.userService.readUsers().subscribe(user => {
      this.users = user
    })
  }




}
