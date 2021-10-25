import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {

  convertD: boolean = false;

  @Output() convert = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  convertF() {
    this.convertD = !this.convertD;
    console.log( this.convertD );
    this.convert.emit( this.convertD );
  }

}
