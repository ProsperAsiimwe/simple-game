import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit {
  @Input() number: number; // make this value initializable/bindable from outside this component using @Input() decorator

  constructor() {}

  ngOnInit(): void {}
}
