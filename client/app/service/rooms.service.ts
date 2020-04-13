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
    public getPoke(roomData): Observable<IRoom> {
        return this.http.post<IRoom>('https://pokeapi.co/api/v2/pokemon?limit=151', roomData)
    }
}
 // this.selectedTenant$ =
   
    // this.token$ = this.store.select(getToken);
    // this.user$ = this.store.select(getUser);
    // this.token$.subscribe(val => console.log(val));
    // this.user$.subscribe(valr => console.log(valr));
    // this.selectedTenant = this.store.select(OnboardingSelector.selectedTenant);
    // this.selectedTenant.pipe(skipWhile(u => !u)).subscribe(result => {
    //   this.tenant = result;
    // console.log("this.tenant")
    // });
    // this.tenant$.pipe(skipWhile(u => !u)).subscribe(result => {
    //   this.tenant = result;
    //   console.log(this.tenant)
    // });
//     ettings: this.fb.array([
//       {
//       name: "this.enrolleeId",
//       value: 7
//       },
//       {
//       name: "this.billingId",
//       value: 8
//       }
//   ]),
//   // mailOptions: this.fb.group({
//     serverAddress: new FormControl(this.tenant.mailOptions.serverAddress),
//     serverPort: new FormControl(this.tenant.mailOptions.serverPort),
//     secureOption:new FormControl(this.tenant.mailOptions.secureOption),
//     senderUserName: new FormControl(this.tenant.mailOptions.senderName),
//     senderPassword: new FormControl(this.tenant.mailOptions.senderPassword),
//     senderName: new FormControl(this.tenant.mailOptions.senderName),
//     addOAUTH: new FormControl(this.tenant.mailOptions.addOAUTH)
//   // })
// }),
// tenantId: [this.tenantId],