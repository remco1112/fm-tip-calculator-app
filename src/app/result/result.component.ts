import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() pp = '0.00';
  @Input() tot = '0.00';
  @Input() enableReset = false;
  @Output() reset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onReset() {
    this.reset.emit();
  }

}
