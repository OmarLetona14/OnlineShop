import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplainComponent } from './admin-complain.component';

describe('AdminComplainComponent', () => {
  let component: AdminComplainComponent;
  let fixture: ComponentFixture<AdminComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
