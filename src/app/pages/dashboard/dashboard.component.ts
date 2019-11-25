import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  numberOfSlots: number;

  constructor() { }

  ngOnInit() {
  }

  updateNumberOfSlots(slots) {
    this.numberOfSlots = slots;
    console.log(slots)
  }

}
