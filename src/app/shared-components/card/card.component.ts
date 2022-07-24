import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() color: string = '#fff';
  @Input() percent: number = 0;
  @Input() currentValue: number = 0;
  @Input() cardText: string = '';
  @Input() showProgressBar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
