import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vertigo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './vertigo.component.html',
  styleUrl: './vertigo.component.css'
})
export class VertigoComponent {
  consciousness: string;
  truevertigo: string; 
  illdefined: string; 
  showadvice: boolean[];
  advice: string[];
  adviceindex: number; 
  constructor(){
    this.consciousness = "";
    this.truevertigo = ""; 
    this.illdefined = "";
    this.showadvice = new Array<boolean>(10);
    this.advice = new Array<string>(10);
    this.adviceindex = -1; 
    for (let i = 0 ; i < this.showadvice.length; i++)
      {
        this.showadvice[i] = false; 
        this.advice[i] = "Advice " + i;
      }
  }
  reset(){
    for (let i = 0 ; i < this.showadvice.length; i++)
    this.showadvice[i] = false; 
  }
  check(){
    this.reset(); 
    if(this.consciousness == "yes")
      this.adviceindex = 1;
    else if (this.consciousness == "no")
      if(this.truevertigo == "no" && this.illdefined == "elderly")
        this.adviceindex = 2;
      else if(this.truevertigo == "no" && 
      this.illdefined == "young")
        this.adviceindex = 3; 

    this.showadvice[this.adviceindex] = true; 
    console.log("advice index: " + this.showadvice[this.adviceindex]);
    console.log("advice index: " + this.advice[this.adviceindex]);
  }
}
