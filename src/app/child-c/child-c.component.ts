import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-child-c',
  standalone: true,
  imports: [],
  templateUrl: './child-c.component.html',
  styleUrl: './child-c.component.scss'
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildCComponent {
@Input() data!: { text: string };

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef){

  }
  ngOnInit(){
    this.ngZone.runOutsideAngular(()=>{
      window.addEventListener('mousemove',()=>{
        this.data.text = 'NEW from Mouse Move'
        console.log('%c Child C CD running as Mouse Move','color: pink; font-weight: bold');
        this.cd.detectChanges();
      })
    })
    this.ngZone.runOutsideAngular(()=>{
    fromEvent(window, 'mousemove')
      .pipe(throttleTime(200))
      .subscribe(() => {
        this.data.text = 'NEW from Mouse Move with throttleTime';
        console.log('%c Child C CD running as Mouse Move throttleTime','color: pink; font-weight: bold');
        this.cd.detectChanges();
      });
    })
  }
  ngDoCheck() {
    console.log('%c Child C CD running','color: pink; font-weight: bold');
  }

  ngOnChanges() {
    console.log('%c Child C OnChanges', 'color: pink; font-weight: bold');
  }

  get computed() {
   // console.log('%c Child C Recomputing', 'color: pink; font-weight: bold', this.data.text);
    return this.data.text;
  }
  
}
