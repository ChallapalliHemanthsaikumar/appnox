import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidCardComponent } from './slid-card.component';

describe('SlidCardComponent', () => {
  let component: SlidCardComponent;
  let fixture: ComponentFixture<SlidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
