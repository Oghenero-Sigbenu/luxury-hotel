import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  FG = new FormGroup({
    phone: new FormControl(101),
    id: new FormControl(2000),
    name: new FormControl('test title'),
    address: new FormControl('test body')

  });

  isLoading: boolean;
  constructor(private _store: Store<fromUsers.IUserState>) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log("i am a girl")
    this._store.dispatch(new fromUsers.PostUser(this.FG.value));

  }
}
