import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { DoctorComponent } from './doctor/doctor.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
const routes: Routes = [
  {path: '', redirectTo: '/app-home', pathMatch: 'full'},
  {path: 'chat-bot', component: ChatBotComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'workouts', component: WorkoutsComponent},
  {path: 'app-home', component: HomeComponent},
  {path: '**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
