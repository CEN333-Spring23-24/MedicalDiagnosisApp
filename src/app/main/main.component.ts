import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router){

  }
  go2transfusion(){
      this.router.navigate(['transfusion']);
  }
  go2vertigo(){
      this.router.navigate(['vertigo']);
  }

}
