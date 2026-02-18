
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-heavy-parent',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './heavy-parent.component.html',
  styleUrl: './heavy-parent.component.scss'
  //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeavyParentComponent {
 items = Array.from({ length: 200 }, (_, i) => 'Component ' + i);

  updateOne() {
  const newItems = [...this.items];
  newItems[0] = 'Updated ' + Math.random();
  this.items = newItems;
}


  updateAll() {
    this.items = this.items.map((_, i) => 'Updated ' + i);
  }

  trackByIndex(index: number, item:any) {
    return index;
  }
}
