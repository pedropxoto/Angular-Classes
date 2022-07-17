import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users:User[] =[];
  userId: any = '';
  constructor(private formBuilder: FormBuilder,private userService: UserService,private acroute:ActivatedRoute,
    private router: Router) {
    this.userForm = this.formBuilder.group({
      nome:'',
      sobrenome:'',
      idade:0,
      profissao:'',
      id: 0
    })
   }

  ngOnInit(): void {
    this.acroute.paramMap.subscribe(params=>{
      this.userId = params.get('id');
    })
    if(this.userId !== null){
      this.userService.getOnlyUser(this.userId).subscribe(result =>{
        this.userForm.patchValue({
          nome:result[0].nome,
          sobrenome:result[0].sobrenome,
          idade:result[0].idade,
          profissao:result[0].profissao,
          id: result[0].id
        })
      })
    }
    this.getUsers();
  }

  getUsers(){
    this.userService.getUser().subscribe(response =>{
      this.users = response;
    })
  }

  send(){
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUser(this.userForm.value).subscribe(result =>{
      console.log(`Usuário cadastrado com sucesso`)
    },error =>{
      console.log(error);
    },()=>{
      this.router.navigate(['/']);
    })
    
  }

  updateUser(){
    this.userService.updateUser(this.userId,this.userForm.value).subscribe(result =>{
      console.log("Atualizado com sucesso");
    },error =>{
      console.log(error);
    },()=>{
      this.router.navigate(['/']);
    })
  }
  actionButton(){
    if(this.userId !== null){
      this.updateUser()
    }else{
      this.send()
    }

  }





}
