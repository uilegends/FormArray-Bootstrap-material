import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() config;
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.config, "Parent Data");
    // console.log(this.sendData, 'Output');

  }

  sendFromChild(val: string) {
    this.sendData.emit(val);
  }

}
