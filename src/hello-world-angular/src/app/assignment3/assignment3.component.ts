import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  // Property as function inline declaration
  isDetailsVisible = (): boolean => this.clickCount() % 2 === 1;

  public clickLogs: string[] = [];

  clickCount = (): number => this.clickLogs.length;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickLogs.push(`Log of click ${this.clickCount()}`);
  }

}
