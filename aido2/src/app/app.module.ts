import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { DoctorComponent } from './doctor/doctor.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    WorkoutsComponent,
    NoPageFoundComponent,
    HomeComponent,
    ChatBotComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
