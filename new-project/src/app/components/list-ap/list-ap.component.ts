import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';
import { Personagem } from 'src/shared/interfaces/personagens';

@Component({
  selector: 'app-list-ap',
  templateUrl: './list-ap.component.html',
  styleUrls: ['./list-ap.component.css']
})
export class ListApComponent implements OnInit {
  personagens!: Personagem[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.listService.getList().subscribe(
      (result:any)=>{
        this.personagens=result.results;
      }
    )
  }
}
