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

  constructor(){
    this.age = 30;
    this.penetrating = "default";
    this.heartrate = 70;
    this.bloodpressure = 120; 
    this.comascore = 3; 
    this.gender = "male";
  }
  showme(){
    console.log("Age: " + this.age);
    console.log("penetrating: " + this.penetrating);
    console.log("heartrate: " + this.heartrate);
    console.log("bloodpressure: " + this.bloodpressure);
    console.log("comascore: " + this.comascore);
    console.log("gender: " + this.gender);
  }
}
