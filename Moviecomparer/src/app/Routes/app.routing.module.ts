import { PracticeComponent } from './../practice/practice.component';
import { MainComponent } from './../main/main.component';
import { SignupHomeComponent } from './../signup-home/signup-home.component';
import { HomeComponent } from './../home/home.component';
import { SignInHomeComponent } from './../signin-home/signin-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'signinhome', component: SignInHomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'signuphome', component: SignupHomeComponent},
    { path: 'main', component: MainComponent},
    {path: 'practice', component: PracticeComponent}
]; 

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}