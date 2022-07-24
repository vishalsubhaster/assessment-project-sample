import { Component, OnInit } from '@angular/core';
import { SimpleDataModel } from 'src/app/models/charts.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  progressCards = [{ color: this.getColor(54), percent: 54, currentValue: 45, cardText: 'Total Number of Tasks' },
  { color: this.getColor(54), percent: 54, currentValue: 14, cardText: 'Number of Tasks on Track' },
  { color: this.getColor(30), percent: 30, currentValue: 8, cardText: 'Number of Tasks Delayed' },
  { color: this.getColor(16), percent: 16, currentValue: 4, cardText: 'Number of Tasks Significantly Delayed' },
  { color: this.getColor(19), percent: 19, currentValue: 19, cardText: 'Number of Tasks Completed' }]

  /* Data for donut chart */
  data: SimpleDataModel[] = [
    { name: "35%", value: "35", color: "#227889" },
    { name: "65%", value: "65", color: "#6b949a" },
  ];

  /* Data for horizontal stcaked graph */
  stackGraphData = [[{
    Year: 2017,
    Sector: "Strategic Affairs",
    "Key1": 4,
    "Key2": 3,
    "Key3": 5,
    "Key4": 2
  },
  {
    Year: 2017,
    Sector: "Healthcare Workforce Sector",
    "Key1": 3,
    "Key2": 2,
    "Key3": 3,
    "Key4": 3
  },
  {
    Year: 2017,
    Sector: "Healthcare Facilities Sector",
    "Key1": 3,
    "Key2": 5,
    "Key3": 2,
    "Key4": 1
  },
  {
    Year: 2017,
    Sector: "Support Services",
    "Key1": 5,
    "Key2": 3,
    "Key3": 2,
    "Key4": 2
  },
  ],
  [{
    Year: 2017,
    Sector: "Dr. Omar Najim",
    "Key1": 4,
    "Key2": 3,
    "Key3": 3,
    "Key4": 2
  },
  {
    Year: 2017,
    Sector: "Sharon Reily",
    "Key1": 3,
    "Key2": 2,
    "Key3": 3,
    "Key4": 3
  },
  {
    Year: 2017,
    Sector: "Salem Abdulkareem",
    "Key1": 3,
    "Key2": 5,
    "Key3": 2,
    "Key4": 1
  },
  {
    Year: 2017,
    Sector: "Amna Alhameli",
    "Key1": 5,
    "Key2": 3,
    "Key3": 2,
    "Key4": 2
  },
  ]];


  constructor() { }

  ngOnInit(): void {
    
  }

  /* Function to set col classes for progress cards for correct utilization of space */
  getColClasses(index: number) {
    return (index == 1 || index == 2) ? 'col-md-3 col-lg-3 col-sm-5' : 'col-md-2 col-lg-2 col-sm-5';
  }

  /* Functin to get circular progress colors according to percent value */
  getColor(percent: number) {
    if (percent > 50) {
      return '#539e7c';
    } else if (percent > 25) {
      return '#c1a279';
    } else {
      return '#a24558';
    }
  }
}
