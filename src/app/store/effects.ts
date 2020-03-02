import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { UsersService } from '../service/users.service';
import { Action } from '@ngrx/store';
import * as fromUsers from '.'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';

 

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions,
        private userService: UsersService) {
    }

    @Effect()
    postUser$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UserActionTypes.PostUser),
        map((action: fromUsers.PostUser) => action.payload),
        mergeMap((user: IUser) =>
            this.userService.postUser(user).pipe(
                map((user: IUser) => {
                    return new fromUsers.PostUserSuccess(user);
                }),
                catchError((error) =>
                    of(new fromUsers.PostUserFail(error)))
            )

        ));
}