import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '',pathMatch:"full" ,redirectTo: '/sign-in'},
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
];
