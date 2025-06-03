import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import {UsersService} from '../shared/user.service'
@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent {
  allQuestionsData:[]
  questionsStatByDate:[]
  questionsStatByDiscipline:[]
  questionsStatBySubject:[]


  constructor(public userService:UsersService){}
  ngOnInit() {
    this.getData()
  }


  getData(){
    this.userService.getQuestionsStats().subscribe((resp) => {
      let data = resp['data']
      this.allQuestions(data['allQuestions'])
      this.byDate(data['byDate'])
      this.byDiscipline(data['byDiscipline'])
    })
    // this.userService.getQuestionsStatsBySubject(49).subscribe((resp) => {
    //   this.questionsStatBySubject = resp['data']

    // })

  }
  byDiscipline(data) {
    new Chart('questionsByDiscipline', {
      type: 'bar',
      data: {
        labels:
          data.map((x) => {return x.nomeDisciplina}),
        datasets: [{
          label: 'Certas',
          data: data.map((x) => {return x.corrects})
          ,
          backgroundColor: [
            'rgb(75, 192, 192)',
            // 'rgb(54, 205, 86)',
          ],
          stack: 'Stack 0',
        },
        {
          label: 'Total',
          data: data.map((x) => {return x.total})
          ,
          backgroundColor: [
            'rgb(254, 15, 26)',
            // 'rgb(5, 25, 207)',
          ],
          stack: 'Stack 0',

          borderWidth: 0,
        }


      ]
      },
      options: {
        indexAxis: 'y',

        scales: {

          x:{stacked: false,
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          },
          y: {
            stacked: true

          }
        }
      },

    });
  }

  byDate(data) {


    console.log(data.map((x) => {return x.data}))
    new Chart('questionsByDate', {
      type: 'bar',
      data: {
        labels:
          data.map((x) => {return x.data}),
        datasets: [{
          label: 'Certas',
          data: data.map((x) => {return x.corrects})
          ,
          backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
          ],
          stack: 'Stack 0',
          order: 2,

          borderWidth: 0,
        },
        {
          label: 'Total',
          data: data.map((x) => {return x.total})
          ,
          backgroundColor: [
            'rgb(254, 15, 26)',
            'rgb(254, 15, 26)',
          ],
          stack: 'Stack 0',
          order: 2,

          borderWidth: 0,
        },

        {
          label: 'Certas',
          data: data.map((x) => {return x.total}),
          borderColor: 'grey',
          // backgroundColor: 'blue',
          stack: 'Stack 0',
          type: 'line',
          tension: 0.6,
          cubicInterpolationMode: 'monotone',
          order: 1
        }
      ],
      },
      options: {
        scales: {
          x:{stacked: true},
          y: {
            beginAtZero: true,
            stacked: false
          }
        }
      },

    });
  }

  allQuestions(data) {
    console.log(data)
    new Chart('resultChart', {
      type: 'doughnut',
      data: {
        labels:
          ['Certas', 'Total'],
        datasets: [{
          label: 'Dados da Disciplinas',
          data: [data['corrects'], data['total']-data['corrects']]
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
  }
}
