import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ChildBComponent } from '../child-b/child-b.component';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildCComponent } from '../child-c/child-c.component';
import { ChildDComponent } from '../child-d/child-d.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [ChildAComponent, ChildBComponent, ChildCComponent, ChildDComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss'
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponentComponent {
  messageA = { text: 'Initial A' };
  messageB = { text: 'Initial B' };
  messageC = { text: 'Initial C' };
  messageD = { text: 'Initial D' };
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('%c Parent OnInit running: update message A after 2 sec', 'color: red; font-weight: bold');
      this.messageA = { text: 'New A' };
      this.cd.detectChanges();
    }, 2000);
  }
  ngDoCheck() {
    console.log('%c Parent CD running', 'color: red; font-weight: bold');
  }

  updateA() {
    this.messageA = { text: 'New A ' + Math.random() };
  }

  mutateA() {
    this.messageA.text = 'Mutated A ' + Math.random();
  }

  handleEvent(value: string) {
    console.log('Received from child:', value);
  }
  simulateExternalUpdate() {
    setTimeout(() => {
      this.messageB.text = 'External';
      this.cd.markForCheck();
    }, 1000);
  }

  setTimeout() {
    setTimeout(() => {
      this.messageA = { text: 'New A' };
    }, 1000);
  }

}
