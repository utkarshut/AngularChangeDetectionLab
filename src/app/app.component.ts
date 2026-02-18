import { ApplicationRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-change-detection-lab';
   constructor(appRef: ApplicationRef) {
    const originalTick = appRef.tick;

    appRef.tick = function () {
      console.log('%c Angular CD START','color: white; font-weight: bold');
      originalTick.apply(appRef);
      console.log('%c Angular CD END','color: white; font-weight: bold');
    };
  }
}
