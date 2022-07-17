import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Task } from 'src/app/Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Partial<Task> = {}
  @Output() onDeleteTask: EventEmitter<Partial<Task>> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Partial<Task>> = new EventEmitter()

  constructor () {}

  ngOnInit (): void {}

  onDelete (task: Partial<Task>) {
    console.log(this.onDeleteTask.emit(task))
  }
  onToggle (task: Partial<Task>) {
    this.onToggleReminder.emit(task)
  }
}
