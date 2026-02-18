import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss'
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildAComponent {
@Input() data!: { text: string };
  @Output() notify = new EventEmitter<string>();

  ngDoCheck() {
    console.log('%c Child A CD running', 'color: green; font-weight: bold');
  }

  ngOnChanges() {
    console.log('%c Child A OnChanges', 'color: green; font-weight: bold');
  }

  sendToParent() {
    this.notify.emit('Hello Parent');
  }

  get computed() {
    console.log('%c Child A Recomputing', 'color: green; font-weight: bold', this.data.text);
    return this.data.text;
  }
}
