import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
