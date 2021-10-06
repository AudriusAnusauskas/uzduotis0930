import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AssignTaskComponent } from './tasks/assign-task/assign-task.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { UsersComponent } from './users/users.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AssignTaskComponent,
    AddTaskComponent,
    UsersComponent,
    UserTasksComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
