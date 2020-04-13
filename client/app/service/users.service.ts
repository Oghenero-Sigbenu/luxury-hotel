import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) { }

    public postUser(userData): Observable<IUser> {
        return this.http.post<IUser>('..../assets/post', userData);
    }
}
// <div class="table-responsive">
// <table class="table table-striped">
//   <tbody>
//     <tr>
//       <th>Name</th>
//       <th>No of Hosspital </th>
//       <!-- <th>Age</th> -->
//       <th>No of Staff</th>
//       <th>No of Plans</th>
//       <th>Status</th>
//       <!-- <th>TIN</th> -->
//       <!-- <th>Interest %</th> -->
//       <th>Expiry Date</th>
//       <th>View</th>
//     </tr>
//     <!-- <tr> -->
//     <tr *ngFor="let item of companies">
//       <td class="p-0 ">
//         <!-- <div class="kt-user-card-v2__pic" >
//           <img alt="image" profile-image [imageBase64]="imgstring" class="rounded-circle" width="35"
//             data-toggle="tooltip" title="" data-original-title="Wildan Ahdian">
//         </div>
//         <ng-template #defImg>
//           <div class="kt-user-card-v2__pic">
//             <div class="kt-badge kt-badge--xl kt-badge--primary">  -->
//               <!-- {{item.companyName | slice:0:1}} -->
//             <!-- </div>
//           </div>
//         </ng-template> -->
//       </td>
//       <!-- <td>{{item.companyName}}</td> -->
//       <td>24 Years</td>
//       <td>{{item.headOfficeLocation}}</td>
//       <td>{{item.state}} , {{item.city}}</td>
//       <!-- <td>interestPercentage</td> -->
//       <td>item</td>
//       <td>
//         <!-- <div class="badge badge-success" >Activated</div> -->
//           Deactivated
//       </td>
//       <!-- <td>Stage 2 Diabetes</td> -->
//       <!-- <td><div class="badge badge-success">In-patient</div></td> -->
//       <td>
//         <a  class=" icon-left">view</a>
//         <!-- <a routerLink="./../{{item.id}}/detail" class="btn btn-secondary">Detail</a> -->
//       </td>
//     </tr>
//   </tbody>
// </table>
// </div>