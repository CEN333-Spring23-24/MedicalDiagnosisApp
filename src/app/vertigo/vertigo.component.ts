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
  list: string[];
  consciousness: string; 
  truevertigo: string; 
  illdefined: string; 
  cns: string; 
  duration: string; 
  withmovement: string; 
  hearingloss: string; 
  tinnitis: string; 
  otitis: string; 
  adviceToShow: string;

  constructor(){
    this.list = [];
    this.consciousness = "";
    this.truevertigo = "";
    this.illdefined = "";
    this.cns = "";
    this.duration = "";
    this.adviceToShow = "";
    this.withmovement = ""; 
    this.tinnitis = "";
    this.hearingloss = "";
    this.otitis = ""; 

    for (let i = 0 ; i < 10 ; i++)
      this.list.push("Advice " + i);
  }
  reset(){
    // to do: update it
    this.consciousness = "";
    this.truevertigo = "";
    this.illdefined = "";
    this.cns = "";
    this.duration = "";
    this.adviceToShow = "";
  }
  reassess(){
    this.adviceToShow = "";

    if(this.consciousness == "yes")
      this.adviceToShow = this.list[0];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "no" && 
      this.illdefined == "elderly"
      )
      this.adviceToShow = this.list[1];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "no" && 
      this.illdefined == "young"
      )
      this.adviceToShow = this.list[2];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "yes" &&
      this.duration == "brief" 
      )
      this.adviceToShow = this.list[3];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "yes" &&
      this.duration == "constant" 
      )
      this.adviceToShow = this.list[4];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "no" &&
      this.withmovement == "yes" 
      )
      this.adviceToShow = this.list[5];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "no" &&
      this.withmovement == "no" &&
      this.hearingloss == "no"
      )
      this.adviceToShow = this.list[6];

    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "no" &&
      this.withmovement == "no" &&
      this.hearingloss == "yes" &&
      this.tinnitis == "no"
      )
      this.adviceToShow = this.list[7]; 
      
    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "no" &&
      this.withmovement == "no" &&
      this.hearingloss == "yes" &&
      this.tinnitis == "yes" &&
      this.otitis == "no"
      )
      this.adviceToShow = this.list[8];  

    if(
      this.consciousness == "no" && 
      this.truevertigo == "yes" && 
      this.cns == "no" &&
      this.withmovement == "no" &&
      this.hearingloss == "yes" &&
      this.tinnitis == "yes" &&
      this.otitis == "yes"
      )
      this.adviceToShow = this.list[9];  
  }

}
