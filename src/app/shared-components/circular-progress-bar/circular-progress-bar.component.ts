import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.css']
})
export class CircularProgressBarComponent implements OnInit,OnChanges {

  @Input() showPercent: boolean = true;
  @Input() color: string = '#4d5bf9';
  @Input('percentValue') progressEndValue = 10;
  @Input() currentValue = 1;
  @Input() total = 1;
  @Input() speed = 10;

  @ViewChild('progressBar') progressBar?: ElementRef;
  @ViewChild('valueContainer') valueContainer?: ElementRef;
  @ViewChild('percent') percent?: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges(event: SimpleChanges) {
    // let progressBar: HTMLDivElement = document.querySelector(".circular-progress");
    // let valueContainer = document.querySelector(".value-container");
    let progressValue = 0;
    // let progressEndValue = 100;
    // let speed = 10;

    let previousProgressValue = event.progressEndValue.previousValue;
    if (previousProgressValue) {
      progressValue = event.progressEndValue.previousValue
    }

    let progress = setInterval(() => {
      if (this.progressEndValue < progressValue) {
        progressValue--;
      } else {
        progressValue++;
      }
      let textContent = this.showPercent ? `${progressValue}%` : `${this.currentValue}/${this.total}`;
      let marginLeft = (this.currentValue>9)?'32%':'40%';
      this.renderer.setProperty(this.percent?.nativeElement, 'textContent', textContent) ;
      this.renderer.setProperty(this.valueContainer?.nativeElement, 'textContent', this.currentValue) ;
      this.renderer.setStyle(this.valueContainer?.nativeElement, 'marginLeft', marginLeft)
      this.renderer.setStyle(this.progressBar?.nativeElement, 'background', `conic-gradient(
          ${this.color} ${progressValue * 3.6}deg,
          #cadcff ${progressValue * 3.6}deg 
        )`);
      if (progressValue == this.progressEndValue) {
        clearInterval(progress);
      }
    }, this.speed)
  }


}
