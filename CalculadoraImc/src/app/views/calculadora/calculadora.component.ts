import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  altura!:number;
  peso!:number;
  imc!:number;
  mostra:boolean = false; 
  mensa:string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

  mensagem():void{
   let log = this.resultado();
    if(log > 0){
     this.mensa =  `O seu imc é ${log.toFixed(2)} kg/m²`
    }else{
      this.mensa = `Você não informou um número válido.`
    }
  }

  
  resultado():number{
    this.imc = this.peso/((this.altura ** 2)/100)
    if(this.imc > 0){
      this.mostra = true;
      return this.imc * 100;
    }
    return 0;  
  }
}
