import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  interval;
  @Output() incrementedEvent = new EventEmitter<number>;

  start(): void {
    let counter = 0;

    this.interval = setInterval(() => {
      this.incrementedEvent.emit(counter++);

    }, 1000)
  }

  stop(): void {
    clearInterval(this.interval);
  }

}
