import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss'
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBComponent {
@Input() data!: { text: string };
count = signal(0);
total = computed(() => this.count());

  ngDoCheck() {
    console.log('%c Child B CD running', 'color: yellow; font-weight: bold');
  }
  ngOnChanges() {
    console.log('%c Child B OnChanges', 'color: yellow; font-weight: bold');
  }
  get computed() {
    console.log('%c Child B Recomputing', 'color: yellow; font-weight: bold', this.data.text);
    return this.data.text;
  }
  increment() {
  this.count.set(this.count() + 1);
}
}
