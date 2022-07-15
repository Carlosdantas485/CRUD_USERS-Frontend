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
    private userServise: UserService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const strId  = this.route.snapshot.paramMap.get('id');
    var id = parseInt(strId) ;
    this.userServise.readUsersbyID(id).subscribe((product) => {
      this.user = product;
    });
  }

  updateUser(): void {
    this.userServise.update(this.user).subscribe(() => {
      this.userServise.showMesage('Produto atualizado com Sucesso!');
      
    });
  }

  
}
