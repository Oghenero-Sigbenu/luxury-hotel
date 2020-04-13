import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as fromUsers from "../store/index";
import * as Users from "../store/reducers/user";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  FG = new FormGroup({
    phone: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl()

  });

  isLoading: boolean;
  constructor(private _store: Store<Users.IUserState>) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this._store.dispatch(new fromUsers.PostUser(this.FG.value));

  }
}
