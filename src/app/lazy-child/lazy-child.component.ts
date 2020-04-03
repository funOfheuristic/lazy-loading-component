import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.css']
})
export class LazyChildComponent implements OnInit {

  data: string;
  emitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit(){
    this.emitter.emit("Emited");
  }

}
