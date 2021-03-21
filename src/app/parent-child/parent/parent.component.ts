import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // parentData: string;
  constructor() { }

  ngOnInit(): void {
    // this.parentData = "GP";
  }
  fromChild(event) {
    alert(event);
    // console.log(event.value);
  }

}
