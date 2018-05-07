import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular crud';
  employes =[
    {name:'Fast',position:'manager'},
    {name:'juna',position:'manager'},
    {name:'pedro',position:'manager'},
  ];

  model:any={};
  model2:any={};

myvalue;
  addEmployee():void{
    this.employes.push(this.model);

  }
  deteleEmployee(i):void{

      var aswer = confirm("esta reguro de eleimnar");    
      if(aswer){
          this.employes.splice(i,1);
      }
  }
  
  editEmployee(i):void{
    this.model2.name     = this.employes[i].name;
    this.model2.position = this.employes[i].position;
    this.myvalue = i;
  }

  updateEmployee():void{
    
    let i = this.myvalue;
    for(let j = 0; j < this.employes.length; j++){
      if(i == j) {
        this.employes[i] = this.model2;
        this.model2 = {};
      }
    }

  }
}
