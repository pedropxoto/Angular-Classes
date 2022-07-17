import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = "Pedro Peixoto";
  text = '';

  constructor(){
  }

  ngOnInit(): void {
    let interval = setInterval(()=> {
      this.count++;
      if(this.count==10){
        clearInterval(interval)
      }
    },500)
  }

  clicou(name:string):void{
    console.log(name)
  }

}
