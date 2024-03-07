import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TransfusionComponent } from './transfusion/transfusion.component';
import { VertigoComponent } from './vertigo/vertigo.component';
 
export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'main',component:MainComponent},
    {path:'transfusion', component:TransfusionComponent},
    {path:'vertigo', component:VertigoComponent}
];
