import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] | undefined
  selectedUser?:User;
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe((data:User[]) => {this.users = data})
  }

  onSelect(user:User) : void{
    this.selectedUser = user;
  }
}
