import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  projectInput = "";
  descriptionInput = "";

  constructor(private tasksService:TasksService) { }


  addTask(project, description){
    this.tasksService.addTask(project.value, description.value);
  }

  ngOnInit(): void {
  }

}
