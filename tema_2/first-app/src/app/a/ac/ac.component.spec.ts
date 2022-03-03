import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcComponent } from './ac.component';

describe('AcComponent', () => {
  let component: AcComponent;
  let fixture: ComponentFixture<AcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
