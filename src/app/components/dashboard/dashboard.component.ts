import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements AfterViewInit{
  lineChart: any;
  ngAfterViewInit() {
    const lineChart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Oil Filters', 'Air Filters', 'Diesel Pump', 'Air Compressor'],
        datasets: [{
          label: 'Selling Rate',
          data: [10, 20, 15, 25],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Add a transparent fill color
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        elements: {
          point: {
            radius: 0 // Hide the data points
          }
        }
      }
    });
  }

}
