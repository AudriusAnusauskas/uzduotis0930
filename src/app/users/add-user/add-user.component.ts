import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userName = "";
  userSurname = "";


  constructor(private usersService:UsersService) { }
  
  addUser(name, surname){

    this.usersService.addUser(name.value, surname.value);
    
  }

  ngOnInit(): void {
  }

}
