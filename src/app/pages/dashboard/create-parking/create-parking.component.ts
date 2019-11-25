import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ParkingModel } from 'src/app/shared/models/Parking';
import { BaseService } from 'src/app/shared/services/base.service';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.scss']
})
export class CreateParkingComponent implements OnInit {

  @Output() slotsChange = new EventEmitter(null);

  constructor(
    private base: BaseService
  ) { }

  ngOnInit() {

  }

  parkingArea = new ParkingModel(10, 10, 10);

  submitParkingArea() {
    this.base.postParkingDetails(this.parkingArea).subscribe(res => {
      if (res.success) {
        this.slotsChangeEvent(res.data.slots);
      }
    })
  }

  slotsChangeEvent(slots: number) {
    this.slotsChange.emit(slots);
  }

  //Sending the new parking model to the server from here
}
