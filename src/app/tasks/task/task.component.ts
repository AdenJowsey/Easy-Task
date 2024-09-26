import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
