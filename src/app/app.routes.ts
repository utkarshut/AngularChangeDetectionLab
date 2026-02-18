import { Routes } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { HeavyParentComponent } from './heavy-parent/heavy-parent.component';


export const routes: Routes = [
    {
        path:'', component:ParentComponentComponent
    },
    {
        path:'heavy', component:HeavyParentComponent
    }
];
