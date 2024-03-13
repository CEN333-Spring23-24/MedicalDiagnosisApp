import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-transfusion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transfusion.component.html',
  styleUrl: './transfusion.component.css'
})
export class TransfusionComponent {
  age: number;
  penetrating: string;
  heartrate: number; 
  bloodpressure: number; 
  comascore: number; 
  readonly penyes: boolean = true; 
  readonly penno: boolean = false; 
  gender: string;
  points: number; 
  constructor(){
    this.age = 30;
    this.penetrating = "default";
    this.heartrate = 70;
    this.bloodpressure = 120; 
    this.comascore = 3; 
    this.gender = "male";
    this.points = 0; 
  }
  calculateScore(){
    let points: number = 0; 
    if(this.age <= 55)
      points += 0;
    else if (this.age >= 56 && this.age <= 70)
      points += 1;
    else if (this.age > 70)
      points += 2;
   
   if (this.penetrating)
      points += 2;
   else 
      points += 0; 

   if(this.heartrate < 60)
      points += (-4)
   else if (this.heartrate >=60 && this.heartrate <= 119)
      points += 0
   else if( this.heartrate >= 120)
      points += 3
  
   if(this.bloodpressure  < 90)
      points += 7
   else if (this.bloodpressure >= 90)
      points += 0

   if( this.comascore == 14 || this.comascore == 15) 
      points += 0
   else if (this.comascore >= 9 && this.comascore <= 13)
      points += 1
   else if (this.comascore >= 3 && this.comascore <= 8)
      points += 3

   this.points = points; 
   console.log("Points = " + this.points);
  }
  showWarning(){
    return this.points >= 5;
  }
}
