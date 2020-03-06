import {Action} from '@ngrx/store';
import {IRoom} from "../../interfaces/room";
import {HttpErrorResponse} from '@angular/common/http';

export enum RoomActionTypes {
    PostRoom ='[Room] Post Room',
    PostRoomSuccess ='[Room] Post Room Success',
    PostRoomFail ='[Room] Post Room Fail'
}

export class PostRoom implements Action {
    public readonly type = RoomActionTypes.PostRoom;
    constructor(public payload: IRoom) {
        console.log(payload)
    }
}

export class PostRoomSuccess implements Action {
    public readonly type = RoomActionTypes.PostRoomSuccess;
    constructor(public payload: IRoom) {}
}

export class PostRoomFail implements Action {
    public readonly type = RoomActionTypes.PostRoomFail;
    constructor(public error: HttpErrorResponse) {}
}

export type RoomActions =  PostRoom | PostRoomSuccess | PostRoomFail;
