import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IRoom } from '../interfaces/room'; 

@Injectable({
    providedIn: 'root'
})

export class RoomService {
    constructor(private http: HttpClient) {}

    public postRoom(roomData): Observable<IRoom> {
        return this.http.post<IRoom>('..../assests/post', roomData)
    }
}