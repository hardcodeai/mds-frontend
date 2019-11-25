import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { isNgTemplate } from '@angular/compiler';

interface SlotMan {
  isParked: boolean;
  vnumber: string;
  slot: number;
}

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  @Input() slotCount: number;
  slotMan: SlotMan[];

  constructor(private base: BaseService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.setSlotList();
    this.getSlots();
  }

  ngOnInit() {
    console.log(this.slotCount)
  }

  setSlotList() {
  }

  getSlots() {
    this.base.getBookedSlots().subscribe((slots: any) => {
      this.slotMan = slots.success && slots.data;
      console.log(this.slotMan)
    })
  }

  call(e, i: SlotMan) {
    i.isParked = e;

    const postData = {
      slot: i.slot,
      vnumber: e ? i.vnumber : '',
      isParked: e
    }

    this.base.bookNewSlot(postData).subscribe(res => {
      Object.assign(i, res.data)
      console.log(i)
    })

  }

  //This is what will emmit the call for the slot booking and the slot removal also will populate the data according to the data
  //for i in slotCount, if the count is found the booked slots array, push that object else push a default object to make a collection
  //This collection would be sent to the template and is then rendered accodingly

  // onClick() {
  //   this.base.getBookedSlots
  // }


}
