import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {RoomService} from '../../service/rooms.service';
import {Action} from '@ngrx/store';
import * as fromRooms from '..'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IRoom } from '../../interfaces/room';

@Injectable()
export class RoomEffects {
    constructor (private actions$: Actions, 
        private roomService: RoomService){
    }

    @Effect()
    postRoom$: Observable<Action> = this.actions$.pipe(
        ofType(fromRooms.RoomActionTypes.PostRoom),
        map((action: fromRooms.PostRoom) => action.payload),
        mergeMap((room: IRoom) =>
            this.roomService.postRoom(room).pipe(
                map((room: IRoom) => {
                    return new fromRooms.PostRoomSuccess(room)
                }),
                catchError((error) =>
                    of(new fromRooms.PostRoomFail(error)))
            ))
    )
}