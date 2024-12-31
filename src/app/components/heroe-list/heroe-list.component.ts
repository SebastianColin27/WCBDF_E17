import { Component, inject } from '@angular/core';
import { HeroeService } from '../../services/heroe-service.service';

@Component({
  selector: 'app-heroe-list',
  imports: [],
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {
  heroeService = inject(HeroeService);


listadoHeroes:any[]=[]

  constructor() {

this.CargarHeroes()
  }

  EliminarHeroe(id:number){
    this.heroeService.deleteHeroe(id).subscribe((data)=>{
      if(data.estado==1)
      this.CargarHeroes()
    else
      alert(data.msg)
    })
    
  }

  CargarHeroes(){
    this.heroeService.getAllHeroes().subscribe((data: any)=> {
      this.listadoHeroes= data.heroes
       console.log(data.heroes)
     })
  }

}
