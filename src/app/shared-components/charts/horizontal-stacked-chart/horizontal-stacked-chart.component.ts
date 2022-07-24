import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-horizontal-stacked-chart',
  templateUrl: './horizontal-stacked-chart.component.html',
  styleUrls: ['./horizontal-stacked-chart.component.css']
})
export class HorizontalStackedChartComponent implements OnInit {

  @Input() xTransform: number = 75;
  @Input() yTransform: number = 25;

  @Input() data = [{
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
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.drawChart();
  }

  drawChart() {

    var year = [...this.data.map((d) => d.Year)];
    var states = [...this.data.map((d) => d.Sector)];
    const keys: ["Key1", "Key2", "Key3","Key4"] = [
      "Key1",
      "Key2",
      "Key3",
      "Key4"
  ];
    var svg = d3
      .select(".stacked-bar-chart")
      .append("svg")
      .attr("viewBox", `0 0 650 420`)
      .attr(
        "transform",
        "translate(" + this.xTransform + "," + this.yTransform + ")"
      ),
      margin = { top: 35, left: 35, bottom: 0, right: 15 },
      width = 650 - margin.left - margin.right,
      height = 420 - margin.top - margin.bottom;
    var y = d3
      .scaleBand()
      .range([margin.top, height - margin.bottom])
      .padding(0.1)
      .paddingOuter(0.2)
      .paddingInner(0.2);

    var x = d3.scaleLinear().range([margin.left, width - margin.right]);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .attr("class", "y-axis");
    svg
      .append("g")
      .attr("transform", `translate(0,${margin.top})`)
      .attr("class", "x-axis");

    var z = d3
      .scaleOrdinal()
      .range(["#32ac71", "#e69e2d", "#cb334c","#2c5966"])
      .domain(keys);
    const newData = this.data.map((d) => ({
      ...d,
      total: d3.sum(keys, (k) => +d[k as keyof typeof d]),
    }));
    x.domain([0, d3.max(newData, (d) => d.total) as number]).nice();
    y.domain(newData.map((d) => d.Sector));
    // svg
    //   .selectAll(".x-axis")
    //   .transition()
    //   .duration(1000)
    //   .call(d3.axisTop(x).ticks(null, "s") as any);
    svg
      .selectAll(".y-axis")
      .transition()
      .duration(1000)
      .call(d3.axisLeft(y).tickSizeOuter(0) as any);

    var group = svg.selectAll("g.layer").data(
      d3
        .stack<{
          Year: number;
          Sector: string;
          "Key1": number,
          "Key2": number,
          "Key3": number,
          "Key4": number
        }>()
        .keys(keys)(newData),
      (d: any) => d.key
    );

    group.exit().remove();

    group
      .enter()
      .insert("g", ".y-axis")
      .append("g")
      .classed("layer", true)
      .attr("fill", (d) => z(d.key) as string);

    var bars = svg
      .selectAll("g.layer")
      .selectAll("rect")
      .data(
        (d: any) => d,
        (e: any) => e.data.Sector
      );

    bars.exit().remove();

    bars
      .enter()
      .append("rect")
      .attr("height", y.bandwidth())
      .merge(bars as any)
      .transition()
      .duration(1000)
      .attr("y", (d: any) => y(d.data.Sector) as number)
      .attr("x", (d: any) => x(d[0]))
      .attr("rx", (d: any, index) => {                
        return 0; // if want to set border radius we can do that
      })
      .attr("ry", (d: any, index) => {        
        return 0; // if want to set border radius we can do that
      })
      .attr("width", (d: any) => x(d[1]) - x(d[0]));

    var text = svg.selectAll(".text").data(newData, (d: any) => d.Sector);

    text.exit().remove();
    text
      .enter()
      .append("text")
      .attr("class", "text")
      .attr("text-anchor", "start")
      .merge(text as any)
      .transition()
      .duration(1000)
      .attr(
        "y",
        (d: any) => ((y(d.Sector) as number) + y.bandwidth() / 2) as number
      )
      .attr("x", (d: any) => {        
        return x(d.total) + 5;
      })
      .text((d: any) => d.total);
  }

}
