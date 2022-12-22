import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    .myClass{
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'my-first-angular';
  counter = 1;
  showingData = false;
  logs = [];

  showData(){
    this.showingData = true;
    this.logs.push(`Counter = ${(this.counter++).toString()}`)
  }
}
