import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User[]
  values = '';
  users: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.readUsers().subscribe(user => {
      this.user = user
    })
  }

  readUsersbyCpf(event: any):void{
    this.values = event.target.value ;
    
    let cpf = parseInt(this.values)
    this.userService.readUsersbyCpf(cpf).subscribe(user => {
      this.users = user
    })

    
  }
  

}
