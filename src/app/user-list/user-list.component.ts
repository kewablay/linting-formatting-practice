import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <ul>
      @for (user of users; track user) {
        <li>{{ user.name }} ({{ user.age }})</li>
      }
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
