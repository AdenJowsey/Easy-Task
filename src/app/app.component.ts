import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserID);
  }

  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}
