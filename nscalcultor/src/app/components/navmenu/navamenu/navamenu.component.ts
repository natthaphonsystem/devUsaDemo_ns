import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navamenu',
  templateUrl: './navamenu.component.html',
  styleUrls: ['./navamenu.component.scss']
})
export class NavamenuComponent implements OnInit {
  @Input() deviceXs: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
