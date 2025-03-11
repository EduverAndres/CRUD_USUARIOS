import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuevitoComponent } from './huevito.component';

describe('HuevitoComponent', () => {
  let component: HuevitoComponent;
  let fixture: ComponentFixture<HuevitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuevitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuevitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
