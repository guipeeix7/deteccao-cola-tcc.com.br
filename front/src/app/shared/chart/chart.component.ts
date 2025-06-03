import { Component, Input, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  myChart:any;
  constructor(private elementRef: ElementRef) {
  }
  @Input() label:string|undefined;
  @Input() labels:string[]|undefined;
  @Input() data:number[]|undefined;
  counter:number;
  ngOnInit(){
    this.counter = 0
    this.label = 'ALOOOOW'
    this.labels = ['alow', 'teste']
    this.data = [1,2]
    console.log(1)
    this.simplePieChart()
  }
  public simplePieChart(){
    console.log(this.label)
    // let htmlRef = this.elementRef.nativeElement.querySelector('#'+this.label);

    new Chart('teste', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data
          ,
          backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(254, 15, 26)',
            'rgb(201, 203, 207)',
            'rgb(100, 25, 207)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 0,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            }
          }
        }
      }
    });
    this.counter+=1;
  }
}
