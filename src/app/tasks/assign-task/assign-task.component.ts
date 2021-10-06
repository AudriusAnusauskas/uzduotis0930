import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from './../../users.service'
import {TasksService} from './../../tasks.service'

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  @Input() taskProject;
  @Input() taskDescription;
  @Input() taskIndex;

  disabled = false;
  selectas = -1;
  value;
  
 
  users;
  tasks;
 
  constructor(private usersService:UsersService, private tasksService:TasksService) { }

  ngOnInit(): void {
    this.users=this.usersService.users;
    this.tasks=this.tasksService.tasks
  }
assign(user){
  console.log("<priskirts> prjektas:" + this.taskProject + "vartotojas: " + user.value);
  this.usersService.assign(user.value, this.taskProject, this.taskDescription);
 this.tasks.splice(this.taskIndex,1)
}

}
