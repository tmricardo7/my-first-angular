import { Component, OnInit } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsersService],
  // styleUrls: ['./app.component.css']
  styles: [`
    .myClass{
      color: white;
    }
  `]
})
export class AppComponent implements OnInit{
  users: {name:string, isActive:boolean}[];
  counterActivating : number = 0;
  counterDeactivating : number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.users;
    this.usersService.activated.subscribe(n => {
      this.counterActivating = n;
    });

    this.usersService.deactivated.subscribe(n => {
      this.counterDeactivating = n;
    });
  }
}
