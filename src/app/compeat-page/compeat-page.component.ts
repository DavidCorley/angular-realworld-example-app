import { Component } from '@angular/core';
import { PostUser, Post } from '../core/models';
import { CompeatService } from '../core/services';

@Component({
  selector: 'compeat-page',
  templateUrl: './compeat-page.component.html',
})
export class CompeatPageComponent {
  users: PostUser[];
  posts: Post[];
  selectedUser: PostUser;
  showModal: boolean = false;

  public constructor(private compeatService: CompeatService) { }

  userSelected(data) {  
    if (this.selectedUser == data) {
      this.selectedUser = null;
      this.posts = null;
    } else {
      this.selectedUser = data;
      this.getUserPosts(this.selectedUser);
    } 
  }

  getUserPosts(user: PostUser) {
      this.compeatService.getUserPosts(user.id).subscribe(data => this.getUserPostsSuccess(data));
  }

  getUserPostsSuccess(data) {
    this.posts = data;
  }

  showUserInfo() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
