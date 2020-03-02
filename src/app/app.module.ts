import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { GetRoomsComponent } from './get-rooms/get-rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './service/users.service';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    AddRoomComponent,
    GetRoomsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: reducer }),
    EffectsModule.forRoot([UserEffects]),
    RouterModule.forRoot([
      {path: 'add-room', component:AddRoomComponent},
      {path: 'all-rooms', component:GetRoomsComponent},
      {path: 'register', component:RegisterUserComponent},
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
