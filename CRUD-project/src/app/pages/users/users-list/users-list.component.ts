import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser().subscribe((params:User[]) =>{
      this.users = params;
    })
    
  }

  deleteUser(id:number): void{
    this.userService.deleteUser(id).subscribe(response =>{
      console.log("Usuário Excluído");
    },error => {
      console.log(error);
    },() =>{
      this.getUser();
    })

  }
}
