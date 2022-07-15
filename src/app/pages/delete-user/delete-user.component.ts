import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const strId  = this.route.snapshot.paramMap.get('id');
    var id = parseInt(strId) ;
    this.userService.readUsersbyID(id).subscribe((user) => {
      this.user = user;
    });
  }

  deleteUser(): void{
    this.userService.delete(this.user.cpf).subscribe(()=>{
      this.userService.showMesage("Ususario excluido com sucesso!")
    });
  }
}
