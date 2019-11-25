import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ParkingModel } from '../models/Parking';
import { ISlots } from './../models/Slots'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }

  getBookedSlots(): Observable<any> {
    return this.http.get(`${environment.apiUrl}getbookedslots`, {
      headers: this.headers
    });
  }

  postParkingDetails(parking: ParkingModel): Observable<any> {
    return this.http.post(`${environment.apiUrl}parking`, parking, {
      headers: this.headers
    });
  }

  bookNewSlot(slot: ISlots): Observable<any> {
    return this.http.post(`${environment.apiUrl}addslot`, slot, {
      headers: this.headers
    });
  }

  removeSlot(slot: ISlots): Observable<any> {
    return this.http.post(`${environment.apiUrl}removeSlot`, slot, {
      headers: this.headers
    });
  }
}
