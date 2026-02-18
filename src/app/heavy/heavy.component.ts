import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-heavy',
  standalone: true,
  imports: [],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeavyComponent {
  @Input() inputData!: string;
  count = signal(0);

  get computed1() {
    console.log('Recomputing:', this.inputData);
    return this.inputData + ' | Count: ' + this.count();
  }

  increment() {
    this.count.update(v => v + 1);
  }

  localClick() { }
}
