import { Component, OnInit } from '@angular/core';
import {Store } from "@ngrx/store";
// import {Observable} from "rxjs/observable";
import * as fromRoom from "../store/actions/rooms";
import  * as  Rooms from "../store/reducers/room";
import  * as  RoomStore from "../store";
@Component({
  selector: 'app-get-rooms',
  templateUrl: './get-rooms.component.html',
  styleUrls: ['./get-rooms.component.css']
})
export class GetRoomsComponent implements OnInit {

  constructor(private store: Store<Rooms.IRoomState>) { }

  ngOnInit(): void {
    this.store.select(RoomStore.getAllData).subscribe(state => {
      console.log(state)
    })
  }

}
