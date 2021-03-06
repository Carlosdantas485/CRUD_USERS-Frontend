import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute} from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

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

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMesage('Usuário atualizado com sucesso!');
      
    });
  }
}
