import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-d',
  standalone: true,
  imports: [],
  templateUrl: './child-d.component.html',
  styleUrl: './child-d.component.scss'
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildDComponent {
@Input() data!: { text: string };
constructor(private cd: ChangeDetectorRef){

}

ngOnInit() {
    setTimeout(() => {
      console.log('%c Child D onInit running Update data after 5 sec','color: orange; font-weight: bold');
      this.data = { text: 'New D' };
      this.cd.detectChanges();
    }, 5000);
  }

  ngDoCheck() {
    console.log('%c Child D CD running','color: orange; font-weight: bold');
  }

  ngOnChanges() {
    console.log('%c Child D OnChanges', 'color: orange; font-weight: bold');
  }
  get computed() {
    console.log('%c Child D Recomputing', 'color: orange; font-weight: bold', this.data.text);
    return this.data.text;
  }

}
