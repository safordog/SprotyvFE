import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

interface DateCount {
  date: string;
  count: number;
}

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements OnInit, DoCheck {
  
  dateCountArr: DateCount[] = [];
  countArr: number[] = [];
  dateArr: string[] = [];
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];

  lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.getCountAndDateArticles();
  }

  ngDoCheck(): void {
    this.lineChartData = [{ data: [...this.countArr], label: 'Сумарна кількість статей за день' }];
    this.lineChartLabels = [...this.dateArr];
  }

  getCountAndDateArticles() {
    this.analyticsService.getCountAndDateArticles()
    .subscribe((data: DateCount[]) => {
      this.dateCountArr = data;
      for(let i = 0; i < this.dateCountArr.length; i++) {
      this.countArr[i] = this.dateCountArr[i].count;
      this.dateArr[i] = this.dateCountArr[i].date;
    }
    });
  }

  randomize(): void {
    const lineChartData: ChartDataSets[] = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        lineChartData[i].data[j] = Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
      }
    }
    this.lineChartData = lineChartData;
  }

}
