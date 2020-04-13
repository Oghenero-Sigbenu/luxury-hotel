import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as fromRoom from "../store/actions/rooms";
import  * as  Rooms from "../store/reducers/room";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  FG = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    roomType: new FormControl()
  })

  isLoading: boolean;
  constructor(private _store: Store<Rooms.IRoomState>) { }
  from
  ngOnInit(): void {
  }

  public onSubmit() {
    console.log("room added")
    this._store.dispatch(new fromRoom.PostRoom(this.FG.value));

  }

}
