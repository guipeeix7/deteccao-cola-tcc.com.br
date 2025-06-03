import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';
  ngOnInit(){
    if(localStorage.getItem('permissions') == "")
      localStorage.setItem('permissions', JSON.stringify(""))
  }
}
