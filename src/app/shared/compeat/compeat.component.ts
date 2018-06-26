import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostUser, Post } from '../../core';
import { CompeatService } from '../../core';


@Component({
  selector: 'compeat',
  templateUrl: './compeat.component.html',
  outputs: ['userSelectedEvent']

})
export class CompeatComponent {
  users: PostUser[];
  posts: Post[];
  selectedUser: PostUser;
  showModal: boolean = false;
  public userSelectedEvent = new EventEmitter();

  constructor(private compeatService: CompeatService) {
    this.compeatService.getUsers().subscribe(data => this.getUsersSuccess(data));
  }

  selectUser(user: PostUser) {
    if (this.selectedUser == user) {
      this.selectedUser = null;
      this.posts = null;
    } else {
      this.selectedUser = user;      
    }
    this.userSelectedEvent.emit(user);
  }

  getUsersSuccess(data) {
    this.users = data;
  }
}
