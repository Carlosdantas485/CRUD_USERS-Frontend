import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = {
    name: null,
    email: null,
    cpf: null,
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser():void{
    this.userService.create(this.user).subscribe(()=> {
      this.userService.showMesage("Usuário criado")
      console.log(this.user)
    })
  }

}
