import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { GetRoomsComponent } from './get-rooms/get-rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './service/users.service';
import { RoomService } from './service/rooms.service';
import { reducers } from './store/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user';
import { RoomEffects } from './store/effects/rooms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
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
    // MatFormFieldModule,
    // MatInputModule, 36dd250677aedfb06a16e1e4041dd664804e9474
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, RoomEffects]),
    RouterModule.forRoot([
      {path: 'add-room', component:AddRoomComponent},
      {path: 'all-rooms', component:GetRoomsComponent},
      {path: 'register', component:RegisterUserComponent}
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
    BrowserAnimationsModule,
  ],
  providers: [UsersService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
