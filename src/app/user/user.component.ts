import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent{
  @Input() id: number;
  @Input() name: string;
  @Input() isActive: boolean;

  /**
   *
   */
  constructor(private usersService: UsersService) {
  }

  changeStatus(){
    this.usersService.changeStatus(this.id, !this.isActive);
  }
}
