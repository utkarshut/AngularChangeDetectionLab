import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyParentComponent } from './heavy-parent.component';

describe('HeavyParentComponent', () => {
  let component: HeavyParentComponent;
  let fixture: ComponentFixture<HeavyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
