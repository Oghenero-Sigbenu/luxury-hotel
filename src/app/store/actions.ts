
import { Action } from '@ngrx/store';
import { IUser } from '../interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';


export enum UserActionTypes {

    PostUser = '[User] Post User',
    PostUserSuccess = '[User] Post User Success',
    PostUserFail = '[User] Post User Fail',
}

export class PostUser implements Action {
    public readonly type = UserActionTypes.PostUser;
    constructor(public payload: IUser) { }
}

export class PostUserSuccess implements Action {
    public readonly type = UserActionTypes.PostUserSuccess;
    constructor(public payload: IUser) { }
}

export class PostUserFail implements Action {
    public readonly type = UserActionTypes.PostUserFail;
    constructor(public error: HttpErrorResponse) { }
}

export type UserActions =  PostUser | PostUserSuccess | PostUserFail;

